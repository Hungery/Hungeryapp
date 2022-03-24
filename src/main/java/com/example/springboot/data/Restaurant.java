package com.example.springboot.data;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "restaurant")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long restaurantid;

    @Column(name = "nimi")
    public String nimi;

    @Column(name = "osoite")
    public String osoite;

    @Column(name = "tyyppi")
    public String tyyppi;

    @Column(name = "aukioloajat")
    public String aukioloajat;

    @Column(name = "hintataso")
    public String hintataso;

    @Column(name = "kuva")
    public Byte kuva;

    @Column(name = "sahkoposti")
    public String sahkoposti;

    @JsonIgnore
    @Column(name = "salasana")
    public String salasana;

    public Restaurant(){}
}
