package com.example.springboot;

import com.example.springboot.data.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.math.BigInteger;
import java.util.Date;
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

    public Boolean addOrder(OrderHistory orderHistory){
        orderRepo.save(orderHistory);
        return true;
    }

    public String addNewOrder(Date pvm, Double hinta, BigInteger kpl, String restaurant, String customer){

        OrderHistory orderHistory = new OrderHistory(
                pvm,
                hinta,
                kpl,
                restaurant,
                customer
        );

        addOrder(orderHistory);

        return "Order added";
    }
}
