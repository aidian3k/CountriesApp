package aidian3k.dev.countriesappbackend.webclient;

import aidian3k.dev.countriesappbackend.constants.WebClientConstants;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Component
public class ContinentWebClient {
    private final ObjectMapper objectMapper;

    public ContinentWebClient(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    private HttpResponse callGraphQlService(String query) {
        try {
            HttpClient client = HttpClientBuilder.create().build();
            HttpGet request = new HttpGet(WebClientConstants.GraphQlPath);
            URI uri = new URIBuilder(request.getURI()).addParameter("query", query).build();

            request.setURI(uri);

            return client.execute(request);
        } catch (IOException | URISyntaxException exception) {
            throw new IllegalStateException("Cannot call graphql-service");
        }
    }

    public List<String> getCountryNames(String continentId, int numberOfCountries) {
        String query = buildGraphQlQuery(continentId);
        HttpResponse httpResponse = callGraphQlService(query);

        return extractCountryNamesFromResponse(httpResponse, numberOfCountries);
    }

    private String buildGraphQlQuery(String continentId) {
        return "query Query { continent(code: \"%s\") {countries { name}}}".formatted(continentId);
    }

    private List<String> extractCountryNamesFromResponse(HttpResponse httpResponse, int numberOfCountries) {
        try {
            String currentResponse = IOUtils.toString(httpResponse.getEntity().getContent(), StandardCharsets.UTF_8);

            JsonNode jsonResponse = objectMapper.readTree(currentResponse);
            JsonNode countries = jsonResponse.get("data").get("continent").get("countries");

            List<String> allCountryNames = new ArrayList<>();

            for (JsonNode country : countries) {
                String countryName = country.get("name").asText();
                allCountryNames.add(countryName);
            }

            return getRandomCountryNames(allCountryNames, numberOfCountries);
        } catch (IOException exception) {
            throw new IllegalStateException("An Exception occurred when fetching GraphQlData!");
        }
    }

    private List<String> getRandomCountryNames(List<String> allCountryNames, int numberOfCountries) {
        int countryNamesSize = allCountryNames.size();
        List<String> randomCountryNames = new ArrayList<>();
        Set<Integer> randomNumbers = getRandomNumbers(countryNamesSize, numberOfCountries);

        for(int randomNumber : randomNumbers) {
            String countryName = allCountryNames.get(randomNumber);
            randomCountryNames.add(countryName);
        }

        return randomCountryNames;
    }

    private Set<Integer> getRandomNumbers(int countryNamesSize, int numberOfCountries) {
        Set<Integer> randomNumbers = new HashSet<>(numberOfCountries);
        Random rnd = new Random();

        while(randomNumbers.size() < numberOfCountries) {
            randomNumbers.add(rnd.nextInt(countryNamesSize));
        }

        return randomNumbers;
    }
}
