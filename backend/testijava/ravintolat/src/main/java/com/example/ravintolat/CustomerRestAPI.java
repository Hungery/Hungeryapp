package com.example.ravintolat;

import com.example.ravintolat.data.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
public class CustomerRestAPI {
    @Autowired
    CustomerService customerService;

    @PutMapping("/customers/{sahkoposti:.+}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable(value = "sahkoposti") String sahkoposti,
            @Validated @RequestBody Customer customerDetails) {
        System.out.println("**jepajeee" + sahkoposti);
        Customer customer = customerService.getCustomer(sahkoposti);
        System.out.println("**jepajeeejoo2222" + customer);
        customer.setEtunimi(customerDetails.getEtunimi());
        customer.setSukunimi(customerDetails.getSukunimi());
        customer.setOsoite(customerDetails.getOsoite());
        customer.setPuhnro(customerDetails.getPuhnro());
        customerService.setCustomer(customer);
        return ResponseEntity.ok(customer);
    }

    @GetMapping("/customers/{sahkoposti:.+}")
    public Customer getCustomer(@PathVariable(value = "sahkoposti") String sahkoposti) {
        return customerService.getCustomer(sahkoposti);
    }

}
