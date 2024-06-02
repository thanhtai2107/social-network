package com.example.social_network.service.impl;

import com.example.social_network.dto.UserDTO;
import com.example.social_network.entity.UserEntity;
import com.example.social_network.exception.UserException;
import com.example.social_network.jwt.JWTService;
import com.example.social_network.mapper.UserDTOMapper;
import com.example.social_network.repository.UserRepository;
import com.example.social_network.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserDTOMapper userDTOMapper;

    public UserServiceImpl(UserRepository userRepository, UserDTOMapper userDTOMapper) {
        this.userRepository = userRepository;
        this.userDTOMapper = userDTOMapper;
    }

    @Override
    public UserDTO getUserByJwt(String email) throws UserException {
        Optional<UserEntity> user = userRepository.findUserEntityByEmail(email);
        if (user.isEmpty()) throw new UserException("user not found");
        return userDTOMapper.apply(user.get());
    }
}
