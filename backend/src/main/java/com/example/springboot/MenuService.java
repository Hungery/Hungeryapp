package com.example.springboot;

import com.example.springboot.data.Customer;
import com.example.springboot.data.Menu;
import com.example.springboot.data.MenuRepository;
import com.example.springboot.data.OrderHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class MenuService {
    @Autowired
    MenuRepository menuRepo;

    @PostConstruct
    public void init(){
        List<Menu> menus = menuRepo.findAll();

        for (Menu c : menus){
            System.out.println("**************"+c.tuotekategoria);
        }
    }
    public List<Menu> getMenus(){
        return menuRepo.findAll();
    }
}
