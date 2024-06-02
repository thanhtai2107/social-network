package com.example.social_network.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record RegisterReq(
        @NotNull
        String fullname,
        @Email
        String email,
        @NotNull
        @Min(8)
        String password,
        @NotNull
        @Min(8)
        String confirmPassword,
        @NotNull
        String dateOfBirth
) {
}
