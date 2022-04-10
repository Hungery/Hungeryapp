package com.example.springboot.data;

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

    @Id
    @Column(name = "sahkoposti")
    public String sahkoposti;

    @Column(name = "salasana")
    public String salasana;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    public Role role;

    public Restaurant() {
    }

    public Restaurant(String nimi, String sahkoposti, String salasana, Role role) {
        this.nimi = nimi;
        this.sahkoposti = sahkoposti;
        this.salasana = salasana;
        this.role = role;
    }
    public Restaurant(String subject, Object o, Role role){}

}
