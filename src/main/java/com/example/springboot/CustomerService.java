package com.example.springboot;

import com.example.springboot.data.Customer;
import com.example.springboot.data.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Map;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepo;

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
        customerRepo.findById(sahkoposti).orElse(null);
        return null;
    }

}