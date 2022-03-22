package com.example.springboot;

import com.example.springboot.data.Menu;
import com.example.springboot.data.OrderHistory;
import com.example.springboot.data.Restaurant;
import com.example.springboot.data.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class RestaurantService {
    @Autowired
    RestaurantRepository restaurantRepo;

    @PostConstruct
    public void init(){
        List<Restaurant> restaurants = restaurantRepo.findAll();

        for (Restaurant c : restaurants){
            System.out.println("**************"+c.nimi);
        }
    }
    public List<Restaurant> getRestaurants(){
        return restaurantRepo.findAll();
    }
}
