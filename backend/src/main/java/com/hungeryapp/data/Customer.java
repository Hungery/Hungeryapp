package com.hungery.hungeryapp.data;

import javax.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {

    @Column(name = "etunimi")
    public String etunimi;

    @Column(name = "sukunimi")
    public String sukunimi;

    @Column(name = "puhnro")
    public String puhnro;

    @Column(name = "osoite")
    public String osoite;

    @Id
    @Column(name = "sahkoposti")
    public String sahkoposti;

    @Column(name = "salasana")
    public String salasana;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    public Role role;

    public Customer(String etunimi, String sukunimi, String puhnro, String osoite, String sahkoposti, String salasana, Role role) {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.puhnro = puhnro;
        this.osoite = osoite;
        this.sahkoposti = sahkoposti;
        this.salasana = salasana;
        this.role = role;
    }

    public Customer(){}

    public Customer(String subject, Object o, Role role){}

}
