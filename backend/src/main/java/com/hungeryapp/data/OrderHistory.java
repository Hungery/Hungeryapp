package com.hungery.hungeryapp.data;

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
    public Date pvm;

    @Column(name = "hinta")
    public Double hinta;

    @Column(name = "kpl")
    public BigInteger kpl;



    public OrderHistory(){}
}
