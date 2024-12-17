package com.h_3_22_proptech.fintech.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PaymentRequestDTO {

    private int paymentNumber;

    private double amountPaid;

    private String idLoan;
}
