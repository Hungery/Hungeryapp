package com.example.springboot;

import com.example.springboot.data.Restaurant;
import com.example.springboot.data.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class RestaurantService {
    @Autowired
    RestaurantRepository restaurantRepo;

    RestaurantRepository restaurantRepository;

    PasswordEncoder passwordEncoder;

    @PostConstruct
    public void init(){
        List<Restaurant> restaurants = restaurantRepo.getRestaurantsBySearch("t");

        for(Restaurant c : restaurants){
            System.out.println("*******"+c.sahkoposti);
        }
    }

    public List<Restaurant> getRestaurants(){
        return restaurantRepo.findAll();
    }
    public Restaurant getRestaurant(String sahkoposti){
        Restaurant restaurant;
        restaurant = restaurantRepo.findById(sahkoposti).orElse(null);
        return restaurant;
    }
    public Boolean addNewRestaurant(Restaurant restaurant){
        restaurantRepo.save(restaurant);
        return true;
    }
    public Restaurant getRavintolaById(String sahkoposti) {
        Restaurant restaurant;
        System.out.println("**jepajeee" + sahkoposti);
        restaurant = restaurantRepo.findById(sahkoposti).orElse(null);
        System.out.println("**jepajeee" + restaurant.tyyppi);
        return restaurant;
    }

    public Boolean setRavintola(Restaurant restaurant) {
        System.out.println("**lallatilaaa" + restaurant.nimi);
        restaurantRepo.save(restaurant);
        return true;
    }


}
