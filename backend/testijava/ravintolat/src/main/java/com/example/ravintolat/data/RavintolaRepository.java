package com.example.ravintolat.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RavintolaRepository extends JpaRepository<Ravintola, String> {

}
