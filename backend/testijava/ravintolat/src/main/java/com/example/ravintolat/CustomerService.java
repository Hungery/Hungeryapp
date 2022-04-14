package com.example.ravintolat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

import com.example.ravintolat.data.Customer;
import com.example.ravintolat.data.CustomerRepository;

import java.util.List;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepo;

    CustomerRepository customerRepository;

    @PostConstruct
    public void init() {
        List<Customer> customers = customerRepo.getCustomersBySearch("t");

        for (Customer c : customers) {
            System.out.println("*******" + c.sahkoposti);
        }
    }

    public List<Customer> getCustomers() {
        return customerRepo.findAll();
    }

    public Customer getCustomer(String sahkoposti) {
        Customer customer;
        customer = customerRepo.findById(sahkoposti).orElse(null);
        return customer;
    }

    public Boolean addNewCustomer(Customer customer) {
        customerRepo.save(customer);
        return true;
    }

    public Boolean setCustomer(Customer customer) {
        System.out.println("**lallatilaaa" + customer.etunimi);
        customerRepo.save(customer);
        return true;
    }

}
