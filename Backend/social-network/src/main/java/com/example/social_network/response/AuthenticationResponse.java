package com.example.social_network.response;

import com.example.social_network.dto.UserDTO;
import lombok.Getter;

public record AuthenticationResponse(
        String token,
        UserDTO userDTO
) {
}
