package com.example.springboot;

import com.example.springboot.data.Customer;
import com.example.springboot.data.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Map;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepo;

    CustomerRepository customerRepository;

    PasswordEncoder passwordEncoder;

    @PostConstruct
    public void init(){
        List<Customer> customers = customerRepo.getCustomersBySearch("t");

        for(Customer c : customers){
            System.out.println("*******"+c.sahkoposti);
        }
    }

    public List<Customer> getCustomers(){
        return customerRepo.findAll();
    }
    public Customer getCustomer(String sahkoposti){
        Customer customer;
        customer = customerRepo.findById(sahkoposti).orElse(null);
        return customer;
    }
    public Boolean addNewCustomer(Customer customer){
        customerRepo.save(customer);
        return true;
    }


}
