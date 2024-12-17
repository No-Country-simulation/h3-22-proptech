package com.h_3_22_proptech.fintech.service;

import com.h_3_22_proptech.fintech.dto.request.PersonaFisicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.request.PersonaJuridicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.request.UpdatePersonaFisicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.request.UpdatePersonaJuridicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.PersonaJuridicaResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaFisicaEntity;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaJuridicaEntity;

import java.util.List;

public interface IPersonaJuridicaService {

    PersonaJuridicaEntity createPersonaJuridica(PersonaJuridicaRequestDTO personaJuridicaRequestDTO);

    PersonaJuridicaResponseDTO getPersonaJuridicaById(String idPersonaJuridica);

    PersonaJuridicaEntity updatePersonaJuridica(UpdatePersonaJuridicaRequestDTO ujPf);

    List<PersonaJuridicaResponseDTO> getAllPj();
}
