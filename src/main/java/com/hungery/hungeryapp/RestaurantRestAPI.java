package com.hungery.hungeryapp;

import com.hungery.hungeryapp.data.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class RestaurantRestAPI {
    @Autowired
    RestaurantService restaurantService;

    @GetMapping("/restaurants")
    public List<Restaurant> getRestaurants(){
        return restaurantService.getRestaurants();
    }
}