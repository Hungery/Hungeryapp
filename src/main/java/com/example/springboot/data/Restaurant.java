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

    public String getNimi() {
        return nimi;
    }

    public void setNimi(String nimi) {
        this.nimi = nimi;
    }

    public String getOsoite() {
        return osoite;
    }

    public void setOsoite(String osoite) {
        this.osoite = osoite;
    }

    public String getTyyppi() {
        return tyyppi;
    }

    public void setTyyppi(String tyyppi) {
        this.tyyppi = tyyppi;
    }

    public String getAukioloajat() {
        return aukioloajat;
    }

    public void setAukioloajat(String aukioloajat) {
        this.aukioloajat = aukioloajat;
    }

    public String getHintataso() {
        return hintataso;
    }

    public void setHintataso(String hintataso) {
        this.hintataso = hintataso;
    }

    public String getSahkoposti() {
        return sahkoposti;
    }

    public void setSahkoposti(String sahkoposti) {
        this.sahkoposti = sahkoposti;
    }

    public String getSalasana() {
        return salasana;
    }

    public void setSalasana(String salasana) {
        this.salasana = salasana;
    }

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
