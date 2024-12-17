package com.h_3_22_proptech.fintech.dto.request;



import lombok.*;

import java.time.LocalDate;

@Data
@Builder
public class PersonaFisicaRequestDTO {

    private String name;

    private String lastName;

    private LocalDate birthDate;

    private String dni;

    private String nacionality;

    private String phone;

    private String idUser;
}
