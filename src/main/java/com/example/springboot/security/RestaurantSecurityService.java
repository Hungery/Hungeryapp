package com.example.springboot.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.springboot.RestaurantService;
import com.example.springboot.data.Customer;
import com.example.springboot.data.Restaurant;
import com.example.springboot.data.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class RestaurantSecurityService {
    @Autowired
    RestaurantService restaurantService;
    @Autowired
    RestaurantPwEncoder encoder;


    @Value("${jwt.secret}")
    private String jwtSecret;

    public String registerRestaurant(String nimi, String sahkoposti, String salasana, String role){

        Restaurant restaurant = new Restaurant(
                nimi,
                sahkoposti,
                encoder.encode(salasana),
                Role.valueOf(role)
        );

        restaurantService.addNewRestaurant(restaurant);

        return "Restaurant added";
    }

    public String checkBasicAuthentication(String basicAuthHeader) {

        if (!basicAuthHeader.startsWith("Basic")) {
            return null;
        }

        String cred = basicAuthHeader.substring("Basic".length() + 1);
        cred = new String(Base64.getDecoder().decode(cred));  //sahkoposti:salasana

        String[] info = cred.split(":");
        System.out.println(info[0] + " " +info[1]);

        return checkAuthentication(info[0], info[1]);
    }

    public String checkAuthentication(String sahkoposti, String salasana) {
        Restaurant c = restaurantService.getRestaurant(sahkoposti);
        if (c == null) {
            return null;
        }

        return encoder.matches(salasana, c.salasana) ? createToken(c) : null;
    }
    public String createToken(Restaurant restaurant) {
        Algorithm alg = Algorithm.HMAC256(jwtSecret);
        return JWT.create()
                .withSubject(restaurant.sahkoposti)
                .withClaim("role", restaurant.role.toString())
                .sign(alg);
    }
    public Restaurant validateJwt(String jwtToken) {
        Algorithm alg = Algorithm.HMAC256(jwtSecret);
        JWTVerifier verifier = JWT.require(alg).build();

        Restaurant restaurant = null;

        try {
            DecodedJWT jwt = verifier.verify(jwtToken);

            restaurant = new Restaurant(
                    jwt.getSubject(),
                    null,
                    Role.valueOf(jwt.getClaim("role").asString()));

        } catch (JWTVerificationException e) {}
        return restaurant;
    }

}
