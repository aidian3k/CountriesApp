package aidian3k.dev.countriesappbackend.webclient;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Component
public class ApiMapper {
    public List<String> getCountryLanguages(JsonNode jsonResponse) {
        Iterator<JsonNode> jsonLanguages = jsonResponse.at("/0/languages").elements();
        List<String> languagesNames = new ArrayList<>();
        jsonLanguages.forEachRemaining(languageName -> languagesNames.add(languageName.asText()));

        return languagesNames;
    }

    public List<String> getCurrencies(JsonNode jsonResponse) {
        Iterator<JsonNode> jsonCurrencies = jsonResponse.at("/0/currencies").elements();
        List<String> currencies = new ArrayList<>();
        jsonCurrencies.forEachRemaining(currency -> currencies.add(currency.get("name").asText()));

        return currencies;
    }

    public List<String> getCountryCapitals(JsonNode jsonResponse) {
        Iterator<JsonNode> jsonCapitals = jsonResponse.at("/0/capital").elements();
        List<String> capitals = new ArrayList<>();
        jsonCapitals.forEachRemaining(capitalName -> capitals.add(capitalName.asText()));

        return capitals;
    }

    public String getSinglePropertyByName(JsonNode jsonResponse, String propertyPath) {
        return jsonResponse.at("/0/" + propertyPath).asText();
    }
}
