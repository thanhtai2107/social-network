package com.example.social_network.controller;

import com.example.social_network.dto.UserDTO;
import com.example.social_network.exception.UserException;
import com.example.social_network.service.impl.UserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1/user")
public class UserController {
    private final UserServiceImpl userService;

    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping("/profile")
    public ResponseEntity<UserDTO> getUserByJwt(@RequestParam String email) throws UserException {
        return ResponseEntity.ok(userService.getUserByJwt(email));
    }
}
