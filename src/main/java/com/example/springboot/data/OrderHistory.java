package com.example.springboot.data;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;

@Entity
@Table(name = "orderhistory")
public class OrderHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long orderhistoryid;

    @Column(name = "pvm")
    public String pvm;

    @Column(name = "hinta")
    public String hinta;

    @Column(name = "kpl")
    public String kpl;

    @Column(name = "menuid")
    public BigInteger menuid;

    @Column(name = "restaurant")
    public String restaurant;

    @Column(name = "customer")
    public String customer;

    public OrderHistory(){}

    public OrderHistory(String pvm, String hinta , String kpl, String restaurant, String customer) {
        this.pvm = pvm;
        this.hinta = hinta;
        this.kpl = kpl;
        this.restaurant = restaurant;
        this.customer = customer;
    }
}


