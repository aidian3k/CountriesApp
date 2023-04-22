package aidian3k.dev.countriesappbackend.service;

import aidian3k.dev.countriesappbackend.model.CountryDetails;
import aidian3k.dev.countriesappbackend.webclient.ContinentWebClient;
import aidian3k.dev.countriesappbackend.webclient.CountryDetailsWebClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService implements CountryDetailer {
    private final ContinentWebClient continentWebClient;
    private final CountryDetailsWebClient countryDetailsWebClient;

    public CountryService(ContinentWebClient continentWebClient, CountryDetailsWebClient countryDetailsWebClient) {
        this.continentWebClient = continentWebClient;
        this.countryDetailsWebClient = countryDetailsWebClient;
    }

    @Override
    public List<CountryDetails> getCountriesDetailsByContinent(String continentId, int numberOfCountries) {
        List<String> countriesNames = continentWebClient.getCountryNames(continentId, numberOfCountries);

        return countryDetailsWebClient.getApiCallDetails(countriesNames);
    }
}
