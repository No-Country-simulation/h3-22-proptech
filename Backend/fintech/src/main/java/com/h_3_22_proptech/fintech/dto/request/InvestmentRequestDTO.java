package com.h_3_22_proptech.fintech.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class InvestmentRequestDTO {

    private String name;
    private double deposit;
    private double nPayments;
    private String idPersona;

}
