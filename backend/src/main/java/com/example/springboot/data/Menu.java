package com.example.springboot.data;

import javax.persistence.*;

@Entity
@Table(name = "menu")
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long menuid;

    @Column(name = "kuvaus")
    public String kuvaus;

    @Column(name = "hinta")
    public Double hinta;

    @Column(name = "kuva")
    public Byte kuva;

    @Column(name = "tuotekategoria")
    public String tuotekategoria;

    public Menu(){}
}
