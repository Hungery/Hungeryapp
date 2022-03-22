package com.example.springboot;

import com.example.springboot.data.Customer;
import com.example.springboot.data.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MenuRestAPI {
    @Autowired
    MenuService menuService;

    @GetMapping("/menus")
    public List<Menu> getMenus(){
        return menuService.getMenus();
    }
}
