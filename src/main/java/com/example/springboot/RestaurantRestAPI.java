package com.example.springboot;

import com.example.springboot.data.OrderHistory;
import com.example.springboot.data.Restaurant;
import com.example.springboot.security.RestaurantSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
@CrossOrigin(origins={ "http://localhost:3000"})
@RestController
public class RestaurantRestAPI {
    @Autowired
    RestaurantService restaurantService;
    @Autowired
    RestaurantSecurityService restaurantSecurity;

    @PostMapping("/loginbasicRestaurant")
    public ResponseEntity<Map<String,String>> loginBasicRestaurant(@RequestHeader("Authorization") String basicAuthHeader){
        System.out.println(basicAuthHeader);
        String token = restaurantSecurity.checkBasicAuthentication(basicAuthHeader);

        if(token == null){
            System.out.println("login failed");
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        System.out.println("login success");
        return new ResponseEntity<>( Map.of( "token", token ), HttpStatus.OK );
    }

    @RequestMapping("/loginRestaurant")
    public ResponseEntity<Map<String, String>> loginRestaurant(@RequestBody Map<String, String> credentials) {
        String token = restaurantSecurity.checkAuthentication(
                credentials.get("sahkoposti"),
                credentials.get("salasana"));

        if (token == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }


        return new ResponseEntity<>(Map.of("token", token), HttpStatus.OK);
    }

    @PostMapping("/loginformRestaurant")
    public ResponseEntity<Map<String,String>> loginFormRestaurant(@RequestParam String sahkoposti, @RequestParam String salasana){
        String token = restaurantSecurity.checkAuthentication(sahkoposti,salasana);

        if(token == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>( Map.of( "token", token ), HttpStatus.OK );
    }

    @PostMapping("/registerRestaurant")
    public ResponseEntity<String> registerRestaurant(@RequestBody Map<String,String> credentials){

        restaurantSecurity.registerRestaurant(
                credentials.get("nimi"),
                credentials.get("sahkoposti"),
                credentials.get("salasana"),
                credentials.get("role")
        );

        return new ResponseEntity<>( "Restaurant registered", HttpStatus.OK );
    }

    @GetMapping("/ravintolat")
    public List<Restaurant> getRestaurants(){
        return restaurantService.getRestaurants();
    }

    @PutMapping("/ravintolat/{sahkoposti:.+}")
    public ResponseEntity<Restaurant> updateRavintola(@PathVariable(value = "sahkoposti") String sahkoposti,
                                                     @Validated @RequestBody Restaurant ravintolaDetails) {
        System.out.println("**jepajeee" + sahkoposti);
        Restaurant restaurant = restaurantService.getRavintolaById(sahkoposti);
        restaurant.setNimi(ravintolaDetails.getNimi());
        restaurant.setOsoite(ravintolaDetails.getOsoite());
        restaurant.setTyyppi(ravintolaDetails.getTyyppi());
        restaurant.setAukioloajat(ravintolaDetails.getAukioloajat());
        restaurant.setHintataso(ravintolaDetails.getHintataso());
        restaurantService.setRavintola(restaurant);
        return ResponseEntity.ok(restaurant);
    }

}
