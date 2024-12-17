package com.h_3_22_proptech.fintech.persistance.mapper;

import com.h_3_22_proptech.fintech.dto.request.PersonaFisicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.PersonaFisicaResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaFisicaEntity;
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
public class IPersonaFisicaMapperImpl implements IPersonaFisicaMapper {

    @Override
    public PersonaFisicaEntity toPersonaFisicaEntity(PersonaFisicaRequestDTO pfDTO) {
        if ( pfDTO == null ) {
            return null;
        }

        PersonaFisicaEntity personaFisicaEntity = new PersonaFisicaEntity();

        personaFisicaEntity.setName( pfDTO.getName() );
        personaFisicaEntity.setLastName( pfDTO.getLastName() );
        personaFisicaEntity.setBirthDate( pfDTO.getBirthDate() );
        personaFisicaEntity.setNacionality( pfDTO.getNacionality() );
        personaFisicaEntity.setDni( pfDTO.getDni() );
        personaFisicaEntity.setPhone( pfDTO.getPhone() );

        return personaFisicaEntity;
    }

    @Override
    public List<PersonaFisicaResponseDTO> toPFResponseDtoList(List<PersonaFisicaEntity> personaFisicaEntityList) {
        if ( personaFisicaEntityList == null ) {
            return null;
        }

        List<PersonaFisicaResponseDTO> list = new ArrayList<PersonaFisicaResponseDTO>( personaFisicaEntityList.size() );
        for ( PersonaFisicaEntity personaFisicaEntity : personaFisicaEntityList ) {
            list.add( personaFisicaEntityToPersonaFisicaResponseDTO( personaFisicaEntity ) );
        }

        return list;
    }

    protected PersonaFisicaResponseDTO personaFisicaEntityToPersonaFisicaResponseDTO(PersonaFisicaEntity personaFisicaEntity) {
        if ( personaFisicaEntity == null ) {
            return null;
        }

        PersonaFisicaResponseDTO.PersonaFisicaResponseDTOBuilder personaFisicaResponseDTO = PersonaFisicaResponseDTO.builder();

        personaFisicaResponseDTO.name( personaFisicaEntity.getName() );
        personaFisicaResponseDTO.lastName( personaFisicaEntity.getLastName() );
        personaFisicaResponseDTO.birthDate( personaFisicaEntity.getBirthDate() );
        personaFisicaResponseDTO.nacionality( personaFisicaEntity.getNacionality() );
        personaFisicaResponseDTO.dni( personaFisicaEntity.getDni() );
        personaFisicaResponseDTO.phone( personaFisicaEntity.getPhone() );
        personaFisicaResponseDTO.provincia( personaFisicaEntity.getProvincia() );
        personaFisicaResponseDTO.localidad( personaFisicaEntity.getLocalidad() );
        personaFisicaResponseDTO.address( personaFisicaEntity.getAddress() );
        personaFisicaResponseDTO.postalCode( personaFisicaEntity.getPostalCode() );

        return personaFisicaResponseDTO.build();
    }
}
