package com.h_3_22_proptech.fintech.service.impl;

import com.h_3_22_proptech.fintech.dto.request.InvestmentRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.InvsPersonaResponseDTO;
import com.h_3_22_proptech.fintech.dto.response.InvestmentResponseDTO;
import com.h_3_22_proptech.fintech.dto.response.LoanResponseDTO;
import com.h_3_22_proptech.fintech.enums.StatusTransaction;
import com.h_3_22_proptech.fintech.persistance.entity.InvestmentEntity;
import com.h_3_22_proptech.fintech.persistance.entity.LoanEntity;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaFisicaEntity;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaJuridicaEntity;
import com.h_3_22_proptech.fintech.persistance.mapper.IInvestmentMapper;
import com.h_3_22_proptech.fintech.persistance.repository.IInvestmentRepository;
import com.h_3_22_proptech.fintech.persistance.repository.IPersonaFisicaRepository;
import com.h_3_22_proptech.fintech.persistance.repository.IPersonaJuridicaRepository;
import com.h_3_22_proptech.fintech.service.IInvestmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class InvestmentServiceImpl implements IInvestmentService {

    @Autowired
    private IInvestmentRepository investmentRepository;

    @Autowired
    private IPersonaFisicaRepository personaFisicaRepository;

    @Autowired
    private IPersonaJuridicaRepository personaJuridicaRepository;

    @Autowired
    private IInvestmentMapper investmentMapper;

    @Override
    public InvestmentResponseDTO createInvestment(InvestmentRequestDTO investmentRequestDTO) {

        InvestmentEntity investment = new InvestmentEntity();

        if (personaFisicaRepository.existsById(investmentRequestDTO.getIdPersona())) {
            PersonaFisicaEntity persona = personaFisicaRepository.findById(investmentRequestDTO.getIdPersona()).orElseThrow();
            investment.setPersonaFisicaEntity(persona);
        } else if (personaJuridicaRepository.existsById(investmentRequestDTO.getIdPersona())) {
            PersonaJuridicaEntity persona = personaJuridicaRepository.findById(investmentRequestDTO.getIdPersona()).orElseThrow();
            investment.setPersonaJuridicaEntity(persona);
        } else {
            System.out.println("No existe!!!!");//TODO implementar excepcion personalizada
        }

        double TIR = 1.1;
        double deposit = investmentRequestDTO.getDeposit();
        double capital = Math.round((deposit * TIR) * 100.0) / 100.0;
        double profit = Math.round((capital - deposit) * 100.0) / 100.0;

        investment.setName(investmentRequestDTO.getName());
        investment.setTIR(TIR);
        investment.setDeposit(deposit);
        investment.setNPayments(investmentRequestDTO.getNPayments());
        investment.setProfit(profit);
        investment.setCapital(capital);
        investment.setStatus(StatusTransaction.PENDIENTE);


        investmentRepository.save(investment);

        return investmentMapper.toInvestmentResponseDTO(investment);
    }

    @Override
    public List<InvestmentResponseDTO> listInvestmentsByPersona(String idPersona) {

        if (personaFisicaRepository.existsById(idPersona)) {

            List<InvestmentEntity> investments = investmentRepository.findAllByPersonaFisicaEntity_IdPF(idPersona);
            List<InvestmentResponseDTO> investmentsDTO = investmentMapper.toInvestmentResponseDtoList(investments);
            return investmentsDTO;

        } else if (personaJuridicaRepository.existsById(idPersona)) {
            List<InvestmentEntity> investments = investmentRepository.findAllByPersonaJuridicaEntity_IdPJ(idPersona);
            List<InvestmentResponseDTO> investmentsDTO = investmentMapper.toInvestmentResponseDtoList(investments);
            return investmentsDTO;
        } else {
            System.out.println("No existe!!!!");//TODO implementar excepcion personalizada
            return null;
        }
    }

    @Override
    public List<InvsPersonaResponseDTO> getAllInvPersona() {

        List<InvestmentEntity> listInv = investmentRepository.findAll();

        List<InvsPersonaResponseDTO> listInvDTO = new ArrayList<>();

        for (InvestmentEntity i : listInv) {

            InvsPersonaResponseDTO invDTO = new InvsPersonaResponseDTO();

            invDTO.setDeposit(i.getDeposit());
            invDTO.setStatus(i.getStatus());


            //chequeo si no es PJ que gurade el de la PF y al reves
            if (i.getPersonaJuridicaEntity() != null) {
                invDTO.setIdPersona(i.getPersonaJuridicaEntity().getIdPJ());
            } else if (i.getPersonaFisicaEntity() != null) {
                invDTO.setIdPersona(i.getPersonaFisicaEntity().getIdPF());
            }

            //uso optional para salvar si es null
            invDTO.setNamePf(Optional.ofNullable(i.getPersonaFisicaEntity())
                    .map(PersonaFisicaEntity::getName)
                    .orElse("------"));

            invDTO.setLastNamePf(Optional.ofNullable(i.getPersonaFisicaEntity())
                    .map(PersonaFisicaEntity::getLastName)
                    .orElse("------"));

            invDTO.setNamePj(Optional.ofNullable(i.getPersonaJuridicaEntity())
                    .map(PersonaJuridicaEntity::getName)
                    .orElse("------"));


            listInvDTO.add(invDTO);
        }

        return listInvDTO;
    }

    @Override
    public InvestmentResponseDTO getInvestmentById(String idInv) {

        InvestmentEntity investmentEntity = investmentRepository.findById(idInv).orElseThrow();

        InvestmentResponseDTO investmentResponseDTO = investmentMapper.toInvestmentResponseDTO(investmentEntity);

        return investmentResponseDTO;
    }

}
