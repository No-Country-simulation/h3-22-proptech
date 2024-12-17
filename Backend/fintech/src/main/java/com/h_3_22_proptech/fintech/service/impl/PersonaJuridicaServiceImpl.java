package com.h_3_22_proptech.fintech.service.impl;

import com.h_3_22_proptech.fintech.dto.request.PersonaJuridicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.request.UpdatePersonaJuridicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.PersonaFisicaResponseDTO;
import com.h_3_22_proptech.fintech.dto.response.PersonaJuridicaResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaFisicaEntity;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaJuridicaEntity;
import com.h_3_22_proptech.fintech.persistance.entity.UserEntity;
import com.h_3_22_proptech.fintech.persistance.mapper.IPersonaJuridicaMapper;
import com.h_3_22_proptech.fintech.persistance.repository.IPersonaJuridicaRepository;
import com.h_3_22_proptech.fintech.persistance.repository.IUserRepository;
import com.h_3_22_proptech.fintech.service.IPersonaJuridicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaJuridicaServiceImpl implements IPersonaJuridicaService {

    @Autowired
    private IPersonaJuridicaRepository personaJuridicaRepository;

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IPersonaJuridicaMapper personaJuridicaMapper;

    @Override
    public PersonaJuridicaEntity createPersonaJuridica(PersonaJuridicaRequestDTO personaJuridicaRequestDTO) {

        UserEntity user = userRepository.findById(personaJuridicaRequestDTO.getIdUser()).orElseThrow();

        PersonaJuridicaEntity personaJuridicaEntity = personaJuridicaMapper.toPersonaJuridicaEntity(personaJuridicaRequestDTO);

        personaJuridicaEntity.setUserEntity(user);

        return personaJuridicaRepository.save(personaJuridicaEntity);
    }

    @Override
    public PersonaJuridicaResponseDTO getPersonaJuridicaById(String idPersonaJuridica) {

        PersonaJuridicaEntity personaJuridica = personaJuridicaRepository.findById(idPersonaJuridica).orElseThrow();

        PersonaJuridicaResponseDTO personaJuridicaResponseDTO = personaJuridicaMapper.toPersonaJuridicaResponseDTO(personaJuridica);

        return personaJuridicaResponseDTO;

    }

    @Override
    public PersonaJuridicaEntity updatePersonaJuridica(UpdatePersonaJuridicaRequestDTO upPj) {

        PersonaJuridicaEntity personaJuridicaEntity = personaJuridicaRepository.findById(upPj.getIdPJ()).orElseThrow();

        personaJuridicaEntity.setAddress(upPj.getAddress());
        personaJuridicaEntity.setLocalidad(upPj.getLocalidad());
        personaJuridicaEntity.setProvincia(upPj.getProvincia());
        personaJuridicaEntity.setPostalCode(upPj.getPostalCode());


        return personaJuridicaRepository.save(personaJuridicaEntity);
    }

    @Override
    public List<PersonaJuridicaResponseDTO> getAllPj() {

        List<PersonaJuridicaEntity>  listPj = personaJuridicaRepository.findAll();

        List<PersonaJuridicaResponseDTO> listPfDTO = personaJuridicaMapper.toPJResponseDtoList(listPj);

        return listPfDTO;
    }
}
