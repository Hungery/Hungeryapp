package com.example.springboot.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,String> {
    public List<Customer> findBysahkoposti(String sahkoposti);
    final String query1 = "select * from customer where customer.sahkoposti like %?1%";


    public List<Customer> findByRole(Role role);

    @Query(value=query1, nativeQuery = true)
    public List<Customer> getCustomersBySearch(String s);

}
