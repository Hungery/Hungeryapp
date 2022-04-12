package com.example.springboot;

import com.example.springboot.data.Customer;
import com.example.springboot.data.Menu;
import com.example.springboot.data.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
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
}
