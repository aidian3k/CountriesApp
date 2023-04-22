package aidian3k.dev.countriesappbackend.service;

import aidian3k.dev.countriesappbackend.model.CountryDetails;

import java.util.List;

public interface CountryDetailer {
    List<CountryDetails> getCountriesDetailsByContinent(String continentId, int numberOfCountries);
}
