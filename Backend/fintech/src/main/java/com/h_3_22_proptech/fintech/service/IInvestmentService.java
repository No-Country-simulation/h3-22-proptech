package com.h_3_22_proptech.fintech.service;

import com.h_3_22_proptech.fintech.dto.request.InvestmentRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.InvsPersonaResponseDTO;
import com.h_3_22_proptech.fintech.dto.response.InvestmentResponseDTO;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface IInvestmentService {

    InvestmentResponseDTO createInvestment(@RequestBody InvestmentRequestDTO investmentRequestDTO);

    List<InvestmentResponseDTO> listInvestmentsByPersona(String idPersona);

    List<InvsPersonaResponseDTO> getAllInvPersona();

    InvestmentResponseDTO getInvestmentById(String idInv);
}
