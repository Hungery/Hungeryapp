package com.example.springboot;

import com.example.springboot.data.Customer;
import com.example.springboot.security.CustomerSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
@CrossOrigin(origins={ "http://localhost:3000"})
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

    @RequestMapping("/login")
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
    @PostMapping("/register")
    public ResponseEntity<String> registerCustomer(@RequestBody Map<String,String> credentials){

        customerSecurity.registerUser(
                credentials.get("etunimi"),
                credentials.get("sukunimi"),
                credentials.get("puhnro"),
                credentials.get("osoite"),
                credentials.get("sahkoposti"),
                credentials.get("role"),
                credentials.get("salasana")
        );

        return new ResponseEntity<>( "User registered", HttpStatus.OK );
    }

    @PutMapping("/customers/{sahkoposti:.+}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable(value = "sahkoposti") String sahkoposti,
                                                   @Validated @RequestBody Customer customerDetails) {
        System.out.println("**jepajeee" + sahkoposti);
        Customer customer = customerService.getCustomer(sahkoposti);
        customer.setEtunimi(customerDetails.getEtunimi());
        customer.setOsoite(customerDetails.getOsoite());
        customer.setPuhnro(customerDetails.getPuhnro());
        customerService.setCustomer(customer);
        return ResponseEntity.ok(customer);
    }
    @GetMapping("/customers/{sahkoposti:.+}")

    public Customer getCustomerById(@PathVariable(value = "sahkoposti") String sahkoposti) {

        return customerService.getCustomer(sahkoposti);

    }


}