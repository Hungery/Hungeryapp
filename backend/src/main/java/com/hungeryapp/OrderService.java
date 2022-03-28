package com.hungery.hungeryapp;

import com.hungery.hungeryapp.data.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepo;

    @PostConstruct
    public void init(){
        List<OrderHistory> orders = orderRepo.findAll();

        for (OrderHistory c : orders){
            System.out.println("**************"+c.pvm);
        }
    }
    public List<OrderHistory> getOrderHistorys(){
        return orderRepo.findAll();
    }
}
