package com.h_3_22_proptech.fintech.service.impl;

import com.h_3_22_proptech.fintech.dto.request.LoanRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.InvsPersonaResponseDTO;
import com.h_3_22_proptech.fintech.dto.response.LoanResponseDTO;
import com.h_3_22_proptech.fintech.dto.response.LoanSimulationResponseDTO;
import com.h_3_22_proptech.fintech.dto.response.LoansPersonaResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.InvestmentEntity;
import com.h_3_22_proptech.fintech.persistance.entity.LoanEntity;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaFisicaEntity;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaJuridicaEntity;
import com.h_3_22_proptech.fintech.persistance.mapper.ILoanMapper;
import com.h_3_22_proptech.fintech.persistance.repository.ILoanRepository;
import com.h_3_22_proptech.fintech.persistance.repository.IPersonaFisicaRepository;
import com.h_3_22_proptech.fintech.persistance.repository.IPersonaJuridicaRepository;
import com.h_3_22_proptech.fintech.service.ILoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LoanServiceImpl implements ILoanService {

    @Autowired
    private IPersonaFisicaRepository personaFisicaRepository;

    @Autowired
    private IPersonaJuridicaRepository personaJuridicaRepository;

    @Autowired
    private ILoanRepository loanRepository;

    @Autowired
    private ILoanMapper loanMapper;

    @Override
    public LoanResponseDTO createLoan(LoanRequestDTO loanRequestDTO) {

        LoanEntity loanEntity = new LoanEntity();

        if(personaFisicaRepository.existsById(loanRequestDTO.getIdPersona())){
            PersonaFisicaEntity persona = personaFisicaRepository.findById(loanRequestDTO.getIdPersona()).orElseThrow();
            loanEntity.setPersonaFisicaEntity(persona);
        } else if (personaJuridicaRepository.existsById(loanRequestDTO.getIdPersona())){
            PersonaJuridicaEntity persona = personaJuridicaRepository.findById(loanRequestDTO.getIdPersona()).orElseThrow();
            loanEntity.setPersonaJuridicaEntity(persona);
        }
          else{
            System.out.println("No existe!!!!");//TODO implementar excepcion personalizada
          }

        int nPayments = loanRequestDTO.getNPayments();
        double capital = loanRequestDTO.getCapital();
        double saldo = loanRequestDTO.getCapital();
        double tasaPeriodo = (loanRequestDTO.getTNA() / 100) / 12;
        double cuotaFija = (capital * tasaPeriodo * Math.pow(1 + tasaPeriodo, nPayments)) /
                (Math.pow(1 + tasaPeriodo, nPayments) - 1);

        cuotaFija = Math.round(cuotaFija * 100.0) / 100.0;

        double interes = Math.round((saldo * tasaPeriodo) * 100.0) / 100.0;
        double amortizacion = Math.round((cuotaFija - interes) * 100.0) / 100.0;
        saldo = Math.round((saldo - amortizacion) * 100.0) / 100.0;

        loanEntity.setName(loanRequestDTO.getName());
        loanEntity.setCapital(capital);
        loanEntity.setAmortization(amortizacion);
        loanEntity.setBalance(saldo);
        loanEntity.setFee(cuotaFija);
        loanEntity.setInterest(interes);
        loanEntity.setNroFee(1);
        loanEntity.setNumberPayFee(0);
        loanEntity.setNPayments(nPayments);


        loanRepository.save(loanEntity);

        return loanMapper.toLoanResponseDTO(loanEntity);
    }

    @Override
    public List<LoanResponseDTO> listLoansByPersona(String idPersona) {
        //recordar que para listar loans de una persona debo crear una consulta personalizada en el
        //repository para indicar que hay una relacion entre ellos
        //no es necesario en algunos casos personalizar la consulta sql como en este

        if(personaFisicaRepository.existsById(idPersona)){

            List<LoanEntity> loans = loanRepository.findAllByPersonaFisicaEntity_IdPF(idPersona);
            List<LoanResponseDTO> loansDTO = loanMapper.toLoanResponseDtoList(loans);
            return loansDTO;

        } else if (personaJuridicaRepository.existsById(idPersona)){
            List<LoanEntity> loans = loanRepository.findAllByPersonaJuridicaEntity_IdPJ(idPersona);
            List<LoanResponseDTO> loansDTO = loanMapper.toLoanResponseDtoList(loans);
            return loansDTO;
        }
        else{
            System.out.println("No existe!!!!");//TODO implementar excepcion personalizada
            return null;
        }
    }

    @Override
    public List<LoansPersonaResponseDTO> getAllLoansPersona() {
        List<LoanEntity> listLoan = loanRepository.findAll();

        List<LoansPersonaResponseDTO> listLoanDTO = new ArrayList<>();

        for (LoanEntity l : listLoan) {

            LoansPersonaResponseDTO loanDTO = new LoansPersonaResponseDTO();

            loanDTO.setCapital(l.getCapital());
            loanDTO.setStatus(l.getStatus());

            if (l.getPersonaJuridicaEntity() != null) {
                loanDTO.setIdPersona(l.getPersonaJuridicaEntity().getIdPJ());
            } else if (l.getPersonaFisicaEntity() != null) {
                loanDTO.setIdPersona(l.getPersonaFisicaEntity().getIdPF());
            }

            //uso optional para salvar si es null
            loanDTO.setNamePf(Optional.ofNullable(l.getPersonaFisicaEntity())
                    .map(PersonaFisicaEntity::getName)
                    .orElse("------"));

            loanDTO.setLastNamePf(Optional.ofNullable(l.getPersonaFisicaEntity())
                    .map(PersonaFisicaEntity::getLastName)
                    .orElse("------"));

            loanDTO.setNamePj(Optional.ofNullable(l.getPersonaJuridicaEntity())
                    .map(PersonaJuridicaEntity::getName)
                    .orElse("------"));


            listLoanDTO.add(loanDTO);
        }

        return listLoanDTO;
    }

    @Override
    public LoanResponseDTO getLoanById(String idLoan) {

        LoanEntity loanEntity = loanRepository.findById(idLoan).orElseThrow();

        LoanResponseDTO loanResponseDTO = loanMapper.toLoanResponseDTO(loanEntity);

        return loanResponseDTO;
    }
}
