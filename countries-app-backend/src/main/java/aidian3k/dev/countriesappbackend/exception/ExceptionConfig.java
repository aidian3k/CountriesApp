package aidian3k.dev.countriesappbackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionConfig {
    @ExceptionHandler(value = CountryNotFoundException.class)
    public ResponseEntity<Object> handleCountryNotFoundException() {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
