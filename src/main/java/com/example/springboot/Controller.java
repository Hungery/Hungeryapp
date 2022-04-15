package com.example.springboot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@org.springframework.stereotype.Controller
public class Controller {
    @RequestMapping(value = {"/"})
    public ModelAndView sellerHome(HttpServletRequest request,
                                   HttpServletResponse response) {
        return new ModelAndView("../../resources/static/js/main.f2eb141e.js");
    }
}
