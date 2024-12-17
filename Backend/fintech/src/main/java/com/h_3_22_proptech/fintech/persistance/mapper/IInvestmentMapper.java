package com.h_3_22_proptech.fintech.persistance.mapper;
import com.h_3_22_proptech.fintech.dto.response.InvestmentResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.InvestmentEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface IInvestmentMapper {

    @Mapping(source = "NPayments", target = "nPayments")
    InvestmentResponseDTO toInvestmentResponseDTO(InvestmentEntity investmentEntity);

    List<InvestmentResponseDTO> toInvestmentResponseDtoList(List<InvestmentEntity> investmentEntityList);
}
