package com.example.springboot.data;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long customerid;

    @Column(name = "etunimi")
    public String etunimi;

    @Column(name = "sukunimi")
    public String sukunimi;

    @Column(name = "puhnro")
    public String puhnro;

    @Column(name = "osoite")
    public String osoite;

    @Column(name = "kayttajatunnus")
    public String kayttajatunnus;

    @JsonIgnore
    @Column(name = "salasana")
    public String salasana;


    public Customer(){}
}
