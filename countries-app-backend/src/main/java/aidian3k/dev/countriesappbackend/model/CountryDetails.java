package aidian3k.dev.countriesappbackend.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter
@Setter
public class CountryDetails {
    private String officialName;
    private String subregion;
    private List<String> capitals;
    private List<String> languages;
    private String population;
    private List<String> currencies;
}
