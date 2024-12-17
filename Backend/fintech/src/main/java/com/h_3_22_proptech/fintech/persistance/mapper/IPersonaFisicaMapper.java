package com.h_3_22_proptech.fintech.persistance.mapper;

import com.h_3_22_proptech.fintech.dto.request.PersonaFisicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.LoanResponseDTO;
import com.h_3_22_proptech.fintech.dto.response.PersonaFisicaResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.LoanEntity;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaFisicaEntity;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface IPersonaFisicaMapper {

    // IPersonaFisicaMapper INSTANCE = Mappers.getMapper(IPersonaFisicaMapper.class);

     @Mapping(target = "userEntity", ignore = true)
     @Mapping(target = "provincia", ignore = true)
     @Mapping(target = "postalCode", ignore = true)
     @Mapping(target = "localidad", ignore = true)
     @Mapping(target = "idPF", ignore = true)
     @Mapping(target = "dateUpdated", ignore = true)
     @Mapping(target = "dateCreated", ignore = true)
     @Mapping(target = "address", ignore = true)
     PersonaFisicaEntity toPersonaFisicaEntity(PersonaFisicaRequestDTO pfDTO);

     PersonaFisicaResponseDTO toPersonaFisicaResponseDTO(PersonaFisicaEntity personaFisicaEntity);

     List<PersonaFisicaResponseDTO> toPFResponseDtoList(List<PersonaFisicaEntity> personaFisicaEntityList);


}

//si alguna vez hay problema cuando se genera el builder
//es xq en el pom el plugin lombok tiene que estar antes que la de mapstruct