package com.h_3_22_proptech.fintech.persistance.mapper;

import com.h_3_22_proptech.fintech.dto.response.LoanResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.LoanEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface ILoanMapper {
    @Mapping(source = "NPayments", target = "nPayments")
    LoanResponseDTO toLoanResponseDTO (LoanEntity loanEntity);

    List<LoanResponseDTO> toLoanResponseDtoList(List<LoanEntity> loadEntityList);
}
