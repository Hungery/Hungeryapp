package com.example.springboot.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu,String> {
    final String query1 = "select * from menu where menu.nimiravintola like %?1%";
}
