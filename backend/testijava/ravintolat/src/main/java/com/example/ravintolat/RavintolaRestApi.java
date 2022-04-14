package com.example.ravintolat;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.example.ravintolat.data.Ravintola;
//import com.example.ravintolat.data.RavintolaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RavintolaRestApi {

    @Autowired
    RavintolaService ravintolaService;

    @GetMapping("/ravintolat")
    public List<Ravintola> getRavintolat() {
        return ravintolaService.getRavintolat();
    }

    @GetMapping("/ravintolat/{sahkoposti:.+}")
    public Ravintola getRestaurants(@PathVariable(value = "sahkoposti") String sahkoposti) {
        return ravintolaService.getRavintolaById(sahkoposti);
    }

    @PutMapping("/ravintolat/{sahkoposti:.+}")
    public ResponseEntity<Ravintola> updateRavintola(@PathVariable(value = "sahkoposti") String sahkoposti,
            @Validated @RequestBody Ravintola ravintolaDetails) {
        System.out.println("**jepajeee" + sahkoposti);
        Ravintola ravintola = ravintolaService.getRavintolaById(sahkoposti);
        ravintola.setNimi(ravintolaDetails.getNimi());
        ravintola.setOsoite(ravintolaDetails.getOsoite());
        ravintola.setTyyppi(ravintolaDetails.getTyyppi());
        ravintola.setAukioloajat(ravintolaDetails.getAukioloajat());
        ravintola.setHintataso(ravintolaDetails.getHintataso());
        ravintolaService.setRavintola(ravintola);
        return ResponseEntity.ok(ravintola);
    }

}
