package com.hungery.hungeryapp;

import com.hungery.hungeryapp.data.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class MenuRestAPI {
    @Autowired
    MenuService menuService;

    @GetMapping("/menus")
    public List<Menu> getMenus(){
        return menuService.getMenus();
    }
}
