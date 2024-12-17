package com.h_3_22_proptech.fintech.service;

import com.h_3_22_proptech.fintech.dto.request.LoanRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.LoanResponseDTO;
import com.h_3_22_proptech.fintech.dto.response.LoansPersonaResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.LoanEntity;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ILoanService {

    LoanResponseDTO createLoan(@RequestBody LoanRequestDTO loanRequestDTO);

    List<LoanResponseDTO> listLoansByPersona(String idPersona);

    List<LoansPersonaResponseDTO> getAllLoansPersona();

    LoanResponseDTO getLoanById(String idLoan);
}

