package com.h_3_22_proptech.fintech.persistance.mapper;

import com.h_3_22_proptech.fintech.dto.response.FileResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.FileEntity;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface IFileMapper {

    FileResponseDTO toFileResponseDTO (FileEntity fileEntity);
}
