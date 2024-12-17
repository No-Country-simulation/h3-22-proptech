package com.h_3_22_proptech.fintech.persistance.mapper;

import com.h_3_22_proptech.fintech.dto.request.PersonaJuridicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.PersonaJuridicaResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaJuridicaEntity;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-10T16:59:20-0300",
    comments = "version: 1.6.1, compiler: javac, environment: Java 17.0.9 (Oracle Corporation)"
)
@Component
public class IPersonaJuridicaMapperImpl implements IPersonaJuridicaMapper {

    @Override
    public PersonaJuridicaEntity toPersonaJuridicaEntity(PersonaJuridicaRequestDTO pjDTO) {
        if ( pjDTO == null ) {
            return null;
        }

        PersonaJuridicaEntity personaJuridicaEntity = new PersonaJuridicaEntity();

        personaJuridicaEntity.setName( pjDTO.getName() );
        personaJuridicaEntity.setCuit( pjDTO.getCuit() );
        personaJuridicaEntity.setCountry( pjDTO.getCountry() );
        personaJuridicaEntity.setPhone( pjDTO.getPhone() );

        return personaJuridicaEntity;
    }

    @Override
    public List<PersonaJuridicaResponseDTO> toPJResponseDtoList(List<PersonaJuridicaEntity> personaJuridicaEntityList) {
        if ( personaJuridicaEntityList == null ) {
            return null;
        }

        List<PersonaJuridicaResponseDTO> list = new ArrayList<PersonaJuridicaResponseDTO>( personaJuridicaEntityList.size() );
        for ( PersonaJuridicaEntity personaJuridicaEntity : personaJuridicaEntityList ) {
            list.add( personaJuridicaEntityToPersonaJuridicaResponseDTO( personaJuridicaEntity ) );
        }

        return list;
    }

    protected PersonaJuridicaResponseDTO personaJuridicaEntityToPersonaJuridicaResponseDTO(PersonaJuridicaEntity personaJuridicaEntity) {
        if ( personaJuridicaEntity == null ) {
            return null;
        }

        PersonaJuridicaResponseDTO.PersonaJuridicaResponseDTOBuilder personaJuridicaResponseDTO = PersonaJuridicaResponseDTO.builder();

        personaJuridicaResponseDTO.name( personaJuridicaEntity.getName() );
        personaJuridicaResponseDTO.cuit( personaJuridicaEntity.getCuit() );
        personaJuridicaResponseDTO.country( personaJuridicaEntity.getCountry() );
        personaJuridicaResponseDTO.phone( personaJuridicaEntity.getPhone() );
        personaJuridicaResponseDTO.provincia( personaJuridicaEntity.getProvincia() );
        personaJuridicaResponseDTO.localidad( personaJuridicaEntity.getLocalidad() );
        personaJuridicaResponseDTO.address( personaJuridicaEntity.getAddress() );
        personaJuridicaResponseDTO.postalCode( personaJuridicaEntity.getPostalCode() );

        return personaJuridicaResponseDTO.build();
    }
}
