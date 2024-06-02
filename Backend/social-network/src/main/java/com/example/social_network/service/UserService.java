package com.example.social_network.service;

import com.example.social_network.dto.UserDTO;
import com.example.social_network.exception.UserException;

public interface UserService {
    UserDTO getUserByJwt(String email) throws UserException;
}
