package com.example.springboot;

import com.example.springboot.data.Customer;
import com.example.springboot.data.Menu;
import com.example.springboot.data.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins={ "http://localhost:3000"})
@RestController
public class MenuRestAPI {
    @Autowired
    MenuService menuService;

    MenuRepository menuRepo;

    @GetMapping("/menus")
    public List<Menu> getMenus(){
        return menuService.getMenus();
    }
    @PostMapping("/addmenu")
    public ResponseEntity<String> addNewMenu(@RequestBody Map<String,String> credentials){

        menuService.addNewMenu(
                credentials.get("nimi"),
                credentials.get("kuvaus"),
                credentials.get("tuotekategoria"),
                credentials.get("restaurant"),
                credentials.get("nimiravintola"),
                credentials.get("hinta")
        );

        return new ResponseEntity<>( "Menu registered", HttpStatus.OK );
    }
}
