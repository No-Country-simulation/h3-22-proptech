package com.h_3_22_proptech.fintech.dto.request;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
@Data
@Builder
public class UpdatePersonaFisicaRequestDTO {

    private String idPF;

    private String provincia;

    private String localidad;

    private String address;

    private String postalCode;
}
