package com.example.ravintolat;

import java.util.List;

import javax.annotation.PostConstruct;

import com.example.ravintolat.data.Ravintola;
import com.example.ravintolat.data.RavintolaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RavintolaService {
    @Autowired
    RavintolaRepository ravintolaRepo;

    @PostConstruct
    public void init() {
        List<Ravintola> restaurants = ravintolaRepo.findAll();
        for (Ravintola c : restaurants) {
            System.out.println("**************jujjojoj" + c.nimi);
        }
    }

    public List<Ravintola> getRavintolat() {
        return ravintolaRepo.findAll();
    }

    public Ravintola getRavintolaById(String sahkoposti) {
        Ravintola ravintola;
        System.out.println("**jepajeee" + sahkoposti);
        ravintola = ravintolaRepo.findById(sahkoposti).orElse(null);
        System.out.println("**jepajeee" + ravintola.tyyppi);
        return ravintola;
    }

    public Boolean setRavintola(Ravintola ravintola) {
        System.out.println("**lallatilaaa" + ravintola.nimi);
        ravintolaRepo.save(ravintola);
        return true;
    }

    public Ravintola getRestaurant(String sahkoposti) {
        Ravintola restaurant;
        restaurant = ravintolaRepo.findById(sahkoposti).orElse(null);
        return restaurant;
    }

}