package com.example.social_network.controller;

import com.example.social_network.auth.AuthenticationService;
import com.example.social_network.exception.UserException;
import com.example.social_network.request.LoginReq;
import com.example.social_network.request.RegisterReq;
import com.example.social_network.response.AuthenticationResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public void registerAdmin(@RequestBody RegisterReq req) throws UserException {
        authenticationService.registerAdmin(req);
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody LoginReq req) {
        AuthenticationResponse token = authenticationService.authenticate(req);
        return ResponseEntity.ok().header(HttpHeaders.AUTHORIZATION, token.token()).body(token);
    }
}
