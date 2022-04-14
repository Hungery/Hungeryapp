package com.example.ravintolat.data;

import javax.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {

    @Id
    public String sahkoposti;

    @Column(name = "etunimi")
    public String etunimi;

    @Column(name = "sukunimi")
    public String sukunimi;

    @Column(name = "puhnro")
    public String puhnro;

    @Column(name = "osoite")
    public String osoite;

    @Column(name = "salasana")
    public String salasana;

    public String getSahkoposti() {
        return sahkoposti;
    }

    public void setSahkoposti(String sahkoposti) {
        this.sahkoposti = sahkoposti;
    }

    public String getEtunimi() {
        return etunimi;
    }

    public void setEtunimi(String etunimi) {
        this.etunimi = etunimi;
    }

    public String getSukunimi() {
        return sukunimi;
    }

    public void setSukunimi(String sukunimi) {
        this.sukunimi = sukunimi;
    }

    public String getPuhnro() {
        return puhnro;
    }

    public void setPuhnro(String puhnro) {
        this.puhnro = puhnro;
    }

    public String getOsoite() {
        return osoite;
    }

    public void setOsoite(String osoite) {
        this.osoite = osoite;
    }

    public String getSalasana() {
        return salasana;
    }

    public void setSalasana(String salasana) {
        this.salasana = salasana;
    }

    public Customer() {
    }

    public Customer(String etunimi, String sukunimi, String puhnro, String osoite, String sahkoposti, String salasana) {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.puhnro = puhnro;
        this.osoite = osoite;
        this.sahkoposti = sahkoposti;
        this.salasana = salasana;
    }

    public Customer(String subject, Object o) {
    }

}
