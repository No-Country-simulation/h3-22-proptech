package com.h_3_22_proptech.fintech.dto.response;

import com.h_3_22_proptech.fintech.enums.StatusTransaction;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InvsPersonaResponseDTO {

    private String idPersona;

    private String namePf;

    private String lastNamePf;

    private String namePj;

    private double deposit;

    @Enumerated(EnumType.STRING)
    private StatusTransaction status;


}
