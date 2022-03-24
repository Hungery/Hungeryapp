package com.example.springboot.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.springboot.CustomerService;
import com.example.springboot.data.Customer;
import com.example.springboot.data.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class CustomerSecurityService {
    @Autowired
    CustomerService customerService;
    @Autowired
    CustomerPwEncoder encoder;


    @Value("$jwt.secret")
    private String jwtSecret;



    public String checkAuthentication(String sahkoposti, String salasana){
       Customer c = customerService.getCustomers(sahkoposti);
       if(c == null){
           return null;
       }

       return encoder.matches(salasana, c.salasana) ? createToken(c) : null;

    }

    public String createToken(Customer c){
        Algorithm alg = Algorithm.HMAC256(jwtSecret);
        return JWT.create()
                .withSubject(c.sahkoposti)
                .withClaim("role", c.role.toString())
                .sign(alg);
    }

    public Customer valideteJwt(String jwtToken){
        Algorithm alg = Algorithm.HMAC256(jwtSecret);
        JWTVerifier verifier = JWT.require(alg).build();

        Customer customer = null;

        try{
            DecodedJWT jwt = verifier.verify(jwtToken);

            customer = new Customer(
                    jwt.getSubject(),
                    null,
                    Role.valueOf(jwt.getClaim("role").asString()));

        }catch (JWTVerificationException e){

        }
        return customer;
    }
}
