package com.hungery.hungeryapp;

import com.hungery.hungeryapp.data.Customer;
import com.hungery.hungeryapp.security.CustomerSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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

        @GetMapping("/customers")
        public List<Customer> getCustomers(){
            return customerService.getCustomers();
        }
}
