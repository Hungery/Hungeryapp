package com.hungery.hungeryapp;

import com.hungery.hungeryapp.data.Customer;
import com.hungery.hungeryapp.data.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepo;

    @PostConstruct
    public void init(){

        List<Customer> customers = customerRepo.findAll();

        for(Customer c : customers){
            System.out.println("Asiakas: "+c.etunimi +" " +c.sukunimi);
        }
    }

    //customerSecurityService
    public Customer getCustomers(String sahkoposti){
        customerRepo.findById(sahkoposti).orElse(null);

        return null;
    }

    //customerRestAPI
    public List<Customer> getCustomers(){
        return customerRepo.findAll();
    }
}