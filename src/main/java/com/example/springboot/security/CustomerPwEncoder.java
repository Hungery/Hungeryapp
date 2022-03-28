package com.example.springboot.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.MessageDigestPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomerPwEncoder extends BCryptPasswordEncoder {

}
