package com.h_3_22_proptech.fintech.service.impl;

import com.h_3_22_proptech.fintech.dto.request.PaymentRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.PaymentResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.LoanEntity;
import com.h_3_22_proptech.fintech.persistance.entity.PaymentEntity;
import com.h_3_22_proptech.fintech.persistance.mapper.IPaymentMapper;
import com.h_3_22_proptech.fintech.persistance.repository.ILoanRepository;
import com.h_3_22_proptech.fintech.persistance.repository.IPaymentRepository;
import com.h_3_22_proptech.fintech.service.IPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentServiceImpl implements IPaymentService {

    @Autowired
    private IPaymentRepository paymentRepository;

    @Autowired
    private ILoanRepository loanRepository;

    @Autowired
    private IPaymentMapper paymentMapper;

    @Override
    public PaymentResponseDTO createPayment(PaymentRequestDTO payDTO) {

        PaymentEntity paymentEntity = paymentMapper.toPaymentEntity(payDTO);

        LoanEntity loanEntity = loanRepository.findById(payDTO.getIdLoan()).orElseThrow();

        paymentEntity.setLoan(loanEntity);

        paymentRepository.save(paymentEntity);

        loanEntity.setNumberPayFee(payDTO.getPaymentNumber());

        loanRepository.save(loanEntity);

        return paymentMapper.toPaymentResponseDTO(paymentEntity);




    }
}
