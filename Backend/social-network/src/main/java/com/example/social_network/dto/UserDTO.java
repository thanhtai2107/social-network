package com.example.social_network.dto;

import lombok.Builder;

@Builder
public record UserDTO(
        Long id,
        String fullname,
        String email,
        String dateOfBirth,
        String location,
        String bio,
        String img,
        String backgroundImg
) {
}
