package com.h_3_22_proptech.fintech.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UpdatePersonaJuridicaRequestDTO {

    private String idPJ;

    private String provincia;

    private String localidad;

    private String address;

    private String postalCode;
}
