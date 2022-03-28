package com.hungery.hungeryapp.data;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "restaurant")
public class Restaurant {

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

    @Id
    @Column(name = "sahkoposti")
    public String sahkoposti;

    @JsonIgnore
    @Column(name = "salasana")
    public String salasana;

    public Restaurant(){}
}
