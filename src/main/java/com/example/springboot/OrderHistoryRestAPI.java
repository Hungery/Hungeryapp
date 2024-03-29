package com.example.springboot;

import com.example.springboot.data.Customer;
import com.example.springboot.data.OrderHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins={ "http://localhost:3000"})
@RestController
class OrderHistoryRestAPI {
    @Autowired
    OrderService orderService;

    @GetMapping("/orders")
    public List<OrderHistory> getOrderHistorys(){
        return orderService.getOrderHistorys();
    }

    @PostMapping("/addorderhistory")
    public ResponseEntity<String> addnewOrder(@RequestBody Map<String,String> credentials){

        orderService.addNewOrder(
                credentials.get("pvm"),
                credentials.get("hinta"),
                credentials.get("kpl"),
                credentials.get("restaurant"),
                credentials.get("customer")
        );

        return new ResponseEntity<>( "Order registered", HttpStatus.OK );
    }
}
