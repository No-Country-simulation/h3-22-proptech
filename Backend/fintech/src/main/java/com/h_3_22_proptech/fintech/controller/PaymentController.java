package com.h_3_22_proptech.fintech.controller;

import com.h_3_22_proptech.fintech.dto.request.PaymentRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.LoanResponseDTO;
import com.h_3_22_proptech.fintech.dto.response.PaymentResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.PaymentEntity;
import com.h_3_22_proptech.fintech.service.IPaymentService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("v1/api/payment")
public class PaymentController {

    @Autowired
    private IPaymentService paymentService;

    @Operation(description = "Pagar cuota")
    @PostMapping
    public ResponseEntity<?> createPayment(@RequestBody PaymentRequestDTO payDTO){

        PaymentResponseDTO paymentResponseDTO = paymentService.createPayment(payDTO);

        return ResponseEntity.status(HttpStatus.OK).body(paymentResponseDTO);
    }
}
