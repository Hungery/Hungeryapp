package com.example.springboot;

import com.example.springboot.data.Customer;
import com.example.springboot.security.CustomerSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CustomerRestAPI {
    @Autowired
    CustomerService customerService;
    @Autowired
    CustomerSecurityService customerSecurity;

    @PostMapping("/loginbasic")
    public ResponseEntity<Map<String,String>> loginBasic(@RequestHeader("Authorization") String basicAuthHeader){
        System.out.println(basicAuthHeader);
        String token = customerSecurity.checkBasicAuthentication(basicAuthHeader);

        if(token == null){
            System.out.println("login failed");
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        System.out.println("login success");
        return new ResponseEntity<>( Map.of( "token", token ), HttpStatus.OK );
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> credentials) {
        String token = customerSecurity.checkAuthentication(
                credentials.get("sahkoposti"),
                credentials.get("salasana"));

        if (token == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }


        return new ResponseEntity<>(Map.of("token", token), HttpStatus.OK);
    }

    @PostMapping("/loginform")
    public ResponseEntity<Map<String,String>> loginForm(@RequestParam String sahkoposti, @RequestParam String salasana){
        String token = customerSecurity.checkAuthentication(sahkoposti,salasana);

        if(token == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>( Map.of( "token", token ), HttpStatus.OK );
    }
}