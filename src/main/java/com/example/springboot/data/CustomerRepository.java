package com.example.springboot.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,String> {
    public List<Customer> findByRole(Role role);

    final String query1 = "SELECT * FROM public.customer WHERE public.customer.sahkoposti LIKE %?1%";

    @Query(value = query1, nativeQuery = true)
    public List<Customer> getCustomersBySearch(String s);
}
