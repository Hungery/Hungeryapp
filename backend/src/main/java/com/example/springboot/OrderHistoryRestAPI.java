package com.example.springboot;

import com.example.springboot.data.Customer;
import com.example.springboot.data.OrderHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
class OrderHistoryRestAPI {
    @Autowired
    OrderService orderService;

    @GetMapping("/orders")
    public List<OrderHistory> getOrderHistorys(){
        return orderService.getOrderHistorys();
    }
}
