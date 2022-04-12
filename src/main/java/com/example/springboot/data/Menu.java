package com.example.springboot.data;

import javax.persistence.*;

@Entity
@Table(name = "menu")
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long menuid;

    @Column(name = "nimi")
    public String nimi;

    @Column(name = "kuvaus")
    public String kuvaus;

    @Column(name = "kuva")
    public Byte kuva;

    @Column(name = "tuotekategoria")
    public String tuotekategoria;

    @Column(name = "restaurant")
    public static String restaurant;

    @Column(name = "nimiravintola")
    public String nimiravintola;

    @Column(name = "hinta")
    public Double hinta;



    public Menu(){}

}
