package com.h_3_22_proptech.fintech.persistance.repository;

import com.h_3_22_proptech.fintech.persistance.entity.InvestmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IInvestmentRepository extends JpaRepository<InvestmentEntity, String> {

    List<InvestmentEntity> findAllByPersonaFisicaEntity_IdPF(String idPersona);

    List<InvestmentEntity> findAllByPersonaJuridicaEntity_IdPJ(String idPersona);

}
