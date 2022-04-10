package com.example.springboot.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.springboot.CustomerService;
import com.example.springboot.data.Customer;
import com.example.springboot.data.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.Base64;

@Service
public class CustomerSecurityService {
    @Autowired
    CustomerService customerService;
    @Autowired
    CustomerPwEncoder encoder;


    @Value("${jwt.secret}")
    private String jwtSecret;

    public String registerUser(String etunimi, String sukunimi, String puhnro, String osoite, String sahkoposti, String role, String salasana){

        Customer customer = new Customer(
                etunimi,
                sukunimi,
                puhnro,
                osoite,
                sahkoposti,
                encoder.encode(salasana),
                Role.valueOf(role)
        );

        customerService.addNewCustomer(customer);

        return "Customer added";
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
        Customer c = customerService.getCustomer(sahkoposti);
        if (c == null) {
            return null;
        }

        return encoder.matches(salasana, c.salasana) ? createToken(c) : null;
    }

    public String createToken(Customer customer) {
        Algorithm alg = Algorithm.HMAC256(jwtSecret);
        return JWT.create()
                .withSubject(customer.sahkoposti)
                .withClaim("role", customer.role.toString())
                .sign(alg);
    }

    public Customer validateJwt(String jwtToken) {
        Algorithm alg = Algorithm.HMAC256(jwtSecret);
        JWTVerifier verifier = JWT.require(alg).build();

        Customer customer = null;

        try {
            DecodedJWT jwt = verifier.verify(jwtToken);

            customer = new Customer(
                    jwt.getSubject(),
                    null,
                    Role.valueOf(jwt.getClaim("role").asString()));

        } catch (JWTVerificationException e) {}
        return customer;
    }
}



