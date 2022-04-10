package com.example.springboot.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RestaurantPwEncoder extends BCryptPasswordEncoder {
}
