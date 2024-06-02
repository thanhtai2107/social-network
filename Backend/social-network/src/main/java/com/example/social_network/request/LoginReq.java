package com.example.social_network.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record LoginReq(
        @NotNull
        @Email
        String email,
        @NotNull
        @Min(8)
        String password
) {
}
