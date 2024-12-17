package com.h_3_22_proptech.fintech.service;

import com.h_3_22_proptech.fintech.dto.request.PaymentRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.PaymentResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.PaymentEntity;

public interface IPaymentService {
    PaymentResponseDTO createPayment(PaymentRequestDTO payDTO);
}
