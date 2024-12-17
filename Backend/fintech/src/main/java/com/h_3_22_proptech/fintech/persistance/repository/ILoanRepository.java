package com.h_3_22_proptech.fintech.persistance.repository;

import com.h_3_22_proptech.fintech.persistance.entity.LoanEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ILoanRepository extends JpaRepository<LoanEntity, String> {

    //el nombre del metodo puede ser cualquiera por ejemplo buscarloquequiera
    //pero debo hacer una conulta sql personalizada y determinar lo que quiero hacer
    //ahora puedo evitar hacer una conulta sql personalizada teniendo cuidado con el nombre del metodo
    //en este caso findAllBy JPA lo conoce
    //si le agrego exactamente lo que quiero respetando los atributos
    //JPA lo entendera sin necesidad de hacer una sql personalizada
    //PersonaFisicaEntity es el nombre del atributo que pertenece a loanEntity
    //y IdPF es tal cual el atributo de id de la personafisica
    //si no coloco bien los nombres no funiconara
    List<LoanEntity> findAllByPersonaFisicaEntity_IdPF(String idPersona);

    List<LoanEntity> findAllByPersonaJuridicaEntity_IdPJ(String idPersona);
}
