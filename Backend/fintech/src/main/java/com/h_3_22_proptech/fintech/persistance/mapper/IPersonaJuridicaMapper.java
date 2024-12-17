package com.h_3_22_proptech.fintech.persistance.mapper;


import com.h_3_22_proptech.fintech.dto.request.PersonaJuridicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.PersonaJuridicaResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaJuridicaEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface IPersonaJuridicaMapper {

    @Mapping(target = "userEntity", ignore = true)
    @Mapping(target = "provincia", ignore = true)
    @Mapping(target = "postalCode", ignore = true)
    @Mapping(target = "localidad", ignore = true)
    @Mapping(target = "idPJ", ignore = true)
    @Mapping(target = "dateUpdated", ignore = true)
    @Mapping(target = "dateCreated", ignore = true)
    @Mapping(target = "address", ignore = true)
    PersonaJuridicaEntity toPersonaJuridicaEntity(PersonaJuridicaRequestDTO pjDTO);

    PersonaJuridicaResponseDTO toPersonaJuridicaResponseDTO(PersonaJuridicaEntity personaJuridicaEntity);

    List<PersonaJuridicaResponseDTO> toPJResponseDtoList(List<PersonaJuridicaEntity> personaJuridicaEntityList);

}
