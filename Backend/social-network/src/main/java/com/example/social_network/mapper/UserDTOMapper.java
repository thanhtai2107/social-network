package com.example.social_network.mapper;

import com.example.social_network.dto.UserDTO;
import com.example.social_network.entity.UserEntity;
import org.springframework.stereotype.Service;
import java.util.function.Function;

@Service
public class UserDTOMapper implements Function<UserEntity, UserDTO> {
    @Override
    public UserDTO apply(UserEntity userEntity) {
        return UserDTO.builder()
                .id(userEntity.getId())
                .fullname(userEntity.getFullname())
                .email(userEntity.getEmail())
                .dateOfBirth(userEntity.getDateOfBirth())
                .bio(userEntity.getBio())
                .location(userEntity.getLocation())
                .img(userEntity.getImg())
                .backgroundImg(userEntity.getBackgroundImg())
                .build();
    }
}
