package com.h_3_22_proptech.fintech.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class PersonaJuridicaResponseDTO {

    private String idPJ;

    private String name;

    private String cuit;

    private String country;

    private String phone;

    private String provincia;

    private String localidad;

    private String address;

    private String postalCode;
}
