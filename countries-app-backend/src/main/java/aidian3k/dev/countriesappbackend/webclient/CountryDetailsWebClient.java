package aidian3k.dev.countriesappbackend.webclient;

import aidian3k.dev.countriesappbackend.exception.CountryNotFoundException;
import aidian3k.dev.countriesappbackend.model.CountryDetails;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Component
public class CountryDetailsWebClient {
    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper mapper = new ObjectMapper();
    private final ApiMapper apiMapper;

    public CountryDetailsWebClient(ApiMapper apiMapper) {
        this.apiMapper = apiMapper;
    }

    public List<CountryDetails> getApiCallDetails(List<String> countryNames) {
        List<CountryDetails> countryDetailsList = new ArrayList<>();
        countryNames.forEach(countryName -> countryDetailsList.add(getSingleCountryDetails(countryName)));

        return countryDetailsList;
    }

    private CountryDetails getSingleCountryDetails(String country) {
        try {
            String jsonText = restTemplate
                    .getForEntity("https://restcountries.com/v3.1/name/" + country, String.class).getBody();

            JsonNode jsonResponse = mapper.readTree(jsonText);

            return extractCountryDetails(jsonResponse);
        } catch (Exception exception) {
            throw new CountryNotFoundException("Json parsing problem!");
        }
    }

    private CountryDetails extractCountryDetails(JsonNode jsonResponse) {
        String subregion = apiMapper.getSinglePropertyByName(jsonResponse, "subregion");
        String population = apiMapper.getSinglePropertyByName(jsonResponse, "population");
        String officialName = apiMapper.getSinglePropertyByName(jsonResponse, "name/official");
        List<String> capitals = apiMapper.getCountryCapitals(jsonResponse);
        List<String> currencies = apiMapper.getCurrencies(jsonResponse);
        List<String> languages = apiMapper.getCountryLanguages(jsonResponse);

        return CountryDetails.builder().subregion(subregion).population(population).officialName(officialName).capitals(capitals).currencies(currencies).languages(languages).build();
    }
}
