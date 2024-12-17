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
public class InvestmentResponseDTO {

    private String idInvestment;

    private String name;

    private double deposit;

    private double nPayments;

    private double TIR;

    private double profit;

    private double capital;

    @Enumerated(EnumType.STRING)
    private StatusTransaction status;

}
