package com.example.social_network.auth;

import com.example.social_network.entity.UserEntity;
import com.example.social_network.exception.UserException;
import com.example.social_network.jwt.JWTService;
import com.example.social_network.mapper.UserDTOMapper;
import com.example.social_network.repository.UserRepository;
import com.example.social_network.request.LoginReq;
import com.example.social_network.request.RegisterReq;
import com.example.social_network.response.AuthenticationResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;


    public AuthenticationService(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, JWTService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    public void registerAdmin(RegisterReq req) throws UserException {
        if (userRepository.findUserEntityByEmail(req.email()).isPresent()) throw new UserException("Exist User");
        if (req.password().equals(req.confirmPassword())) {
            var user = UserEntity.builder()
                    .fullname(req.fullname())
                    .email(req.email())
                    .password(passwordEncoder.encode(req.password()))
                    .dateOfBirth(req.dateOfBirth())
                    .build();
            UserEntity userSaved = userRepository.save(user);
        }

    }

    public AuthenticationResponse authenticate(LoginReq req) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(req.email(), req.password()));
        var user = userRepository.findUserEntityByEmail(req.email()).orElseThrow();
        String jwt = jwtService.generateToken(user);
        return new AuthenticationResponse(jwt, new UserDTOMapper().apply(user));
    }
}
