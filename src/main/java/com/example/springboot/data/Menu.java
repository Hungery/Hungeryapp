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

    @Column(name = "tuotekategoria")
    public String tuotekategoria;

    @Column(name = "restaurant")
    public static String restaurant;

    @Column(name = "nimiravintola")
    public String nimiravintola;

    @Column(name = "hinta")
    public String hinta;



    public Menu(){}

    public Menu(String nimi, String kuvaus, String tuotekategoria, String restaurant, String nimiravintola, String hinta){
        this.nimi = nimi;
        this.kuvaus = kuvaus;
        this.tuotekategoria = tuotekategoria;
        this.restaurant = restaurant;
        this.nimiravintola = nimiravintola;
        this.hinta = hinta;
    }

}
