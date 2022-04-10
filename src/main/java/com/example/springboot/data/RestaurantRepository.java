package com.example.springboot.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant,String> {
    public List<Restaurant> findBysahkoposti(String sahkoposti);
    final String query1 = "select * from restaurant where restaurant.sahkoposti like '%?1%'";


    public List<Restaurant> findByRole(Role role);

    @Query(value=query1, nativeQuery = true)
    public List<Restaurant> getRestaurantsBySearch(String s);

}
