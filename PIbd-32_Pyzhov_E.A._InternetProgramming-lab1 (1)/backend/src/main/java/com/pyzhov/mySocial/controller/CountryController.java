package com.pyzhov.mySocial.controller;

import com.pyzhov.mySocial.dto.CountryDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/countries")
public class CountryController {
    
    private final List<CountryDTO> countries = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong(1);
    
    public CountryController() {
        initializePredefinedData();
    }
    
    private void initializePredefinedData() {
        countries.add(new CountryDTO("1", "Россия"));
        countries.add(new CountryDTO("2", "США"));
        countries.add(new CountryDTO("3", "Германия"));
        countries.add(new CountryDTO("4", "Франция"));
        countries.add(new CountryDTO("5", "Великобритания"));
    }
    
    @GetMapping
    public List<CountryDTO> getAllCountries() {
        return new ArrayList<>(countries);
    }
    
    @GetMapping("/{id}")
    public CountryDTO getCountryById(@PathVariable String id) {
        return countries.stream()
                .filter(country -> country.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Country not found"));
    }
    
    @PostMapping
    public CountryDTO createCountry(@RequestBody CountryDTO countryDTO) {
        countryDTO.setId(String.valueOf(counter.getAndIncrement()));
        countries.add(countryDTO);
        return countryDTO;
    }
    
    @PutMapping("/{id}")
    public CountryDTO updateCountry(@PathVariable String id, @RequestBody CountryDTO countryDTO) {
        CountryDTO existingCountry = getCountryById(id);
        existingCountry.setName(countryDTO.getName());
        return existingCountry;
    }
    
    @DeleteMapping("/{id}")
    public void deleteCountry(@PathVariable String id) {
        CountryDTO country = getCountryById(id);
        countries.remove(country);
    }
}
