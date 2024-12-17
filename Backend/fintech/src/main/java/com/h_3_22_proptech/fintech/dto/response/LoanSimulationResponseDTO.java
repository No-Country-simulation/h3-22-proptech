package com.h_3_22_proptech.fintech.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
public class LoanSimulationResponseDTO {

    private int nroFee;
    private double capital;
    private double interest;
    private double amortization;
    private double fee;
    private double balance;

}
