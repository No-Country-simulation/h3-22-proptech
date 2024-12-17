package com.h_3_22_proptech.fintech.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InvestmentSimulationResponseDTO {

    private double deposit;

    private double nPayments;

    private double TIR;

    private double profit;

    private double capital;

}
