package aidian3k.dev.countriesappbackend.controller;

import aidian3k.dev.countriesappbackend.model.CountryDetails;
import aidian3k.dev.countriesappbackend.service.CountryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("")
public class CountryDetailsController {
    private final CountryService countryService;

    public CountryDetailsController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/{continentId}/{numberOfCountries}")
    public List<CountryDetails> getContinentCountriesDetails(@PathVariable String continentId, @PathVariable int numberOfCountries) {
        return countryService.getCountriesDetailsByContinent(continentId, numberOfCountries);
    }
}
