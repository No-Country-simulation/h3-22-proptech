package com.h_3_22_proptech.fintech.service;

import com.h_3_22_proptech.fintech.persistance.entity.UserEntity;

public interface IUserService {

    UserEntity getUserById(String idUser);

    UserEntity createUser(UserEntity userEntity);
}
