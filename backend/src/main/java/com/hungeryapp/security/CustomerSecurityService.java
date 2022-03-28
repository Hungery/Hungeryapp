package com.hungery.hungeryapp.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.hungery.hungeryapp.CustomerService;
import com.hungery.hungeryapp.data.Customer;
import com.hungery.hungeryapp.data.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class CustomerSecurityService {
    @Autowired
    CustomerService customerService;
    @Autowired
    CustomerPwEncoder encoder;


    @Value("$jwt.secret")
    private String jwtSecret;

/*
Kokeilua esimerkistä
 */
    public String checkBasicAuthentication(String basicAuthHeader){

        if(!basicAuthHeader.startsWith("Basic")){
            return null;
        }

        String cred = basicAuthHeader.substring("Basic".length()+1);
        cred = new String(Base64.getDecoder().decode(cred));  //username:password

        String[] info = cred.split(":");

        return checkAuthentication(info[0], info[1]);
    }



    public String checkAuthentication(String sahkoposti, String salasana){
        Customer c = customerService.getCustomers(sahkoposti);
        if(c == null){
            return null;
        }

        return encoder.matches(salasana, c.salasana) ? createToken(c) : null;

    }

    public String createToken(Customer customer){
        Algorithm alg = Algorithm.HMAC256(jwtSecret);
        return JWT.create()
                .withSubject(customer.sahkoposti)
                .withClaim("role", customer.role.toString())
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