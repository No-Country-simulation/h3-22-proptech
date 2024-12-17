package com.h_3_22_proptech.fintech.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PersonaJuridicaRequestDTO {

    private String name;

    private String cuit;

    private String country;

    private String phone;

    private String idUser;

}
