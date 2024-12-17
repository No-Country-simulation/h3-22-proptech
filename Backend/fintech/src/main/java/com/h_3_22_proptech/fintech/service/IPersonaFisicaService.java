package com.h_3_22_proptech.fintech.service;


import com.h_3_22_proptech.fintech.dto.request.PersonaFisicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.request.UpdatePersonaFisicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.PersonaFisicaResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaFisicaEntity;

import java.util.List;

public interface IPersonaFisicaService {

    PersonaFisicaEntity createPersonaFisica(PersonaFisicaRequestDTO personaFisicaRequestDTO);

    PersonaFisicaResponseDTO getPersonaFisicaById(String idPersonaFisica);

    PersonaFisicaEntity updatePersonaFisica(UpdatePersonaFisicaRequestDTO upPf);

    List<PersonaFisicaResponseDTO> getAllPf();
}
