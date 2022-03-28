package com.hungery.hungeryapp.data;

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

    @Column(name = "hinta")
    public String hinta;

    @Column(name = "kuva")
    public Byte kuva;

    @Column(name = "tuotekategoria")
    public String tuotekategoria;

    @Column(name = "nimiravintola")
    public String nimiravintola;


    public Menu(){}
}