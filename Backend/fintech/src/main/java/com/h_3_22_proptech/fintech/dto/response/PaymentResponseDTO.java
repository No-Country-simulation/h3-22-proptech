package com.h_3_22_proptech.fintech.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PaymentResponseDTO {

    private String idPayment;

    private int paymentNumber;

    private double amountPaid;
}
