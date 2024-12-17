package com.h_3_22_proptech.fintech.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
@Data
@Builder
@AllArgsConstructor
public class PersonaFisicaResponseDTO {

    private String idPF;

    private String name;

    private String lastName;

    private LocalDate birthDate;

    private String nacionality;

    private String dni;

    private String phone;

    private String provincia;

    private String localidad;

    private String address;

    private String postalCode;

}
