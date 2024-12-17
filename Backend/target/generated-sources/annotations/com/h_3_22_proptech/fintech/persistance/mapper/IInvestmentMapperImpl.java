package com.h_3_22_proptech.fintech.persistance.mapper;

import com.h_3_22_proptech.fintech.dto.response.InvestmentResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.InvestmentEntity;
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
public class IInvestmentMapperImpl implements IInvestmentMapper {

    @Override
    public InvestmentResponseDTO toInvestmentResponseDTO(InvestmentEntity investmentEntity) {
        if ( investmentEntity == null ) {
            return null;
        }

        InvestmentResponseDTO.InvestmentResponseDTOBuilder investmentResponseDTO = InvestmentResponseDTO.builder();

        investmentResponseDTO.nPayments( investmentEntity.getNPayments() );
        investmentResponseDTO.name( investmentEntity.getName() );
        investmentResponseDTO.deposit( investmentEntity.getDeposit() );
        investmentResponseDTO.TIR( investmentEntity.getTIR() );
        investmentResponseDTO.profit( investmentEntity.getProfit() );
        investmentResponseDTO.capital( investmentEntity.getCapital() );
        investmentResponseDTO.status( investmentEntity.getStatus() );

        return investmentResponseDTO.build();
    }

    @Override
    public List<InvestmentResponseDTO> toInvestmentResponseDtoList(List<InvestmentEntity> investmentEntityList) {
        if ( investmentEntityList == null ) {
            return null;
        }

        List<InvestmentResponseDTO> list = new ArrayList<InvestmentResponseDTO>( investmentEntityList.size() );
        for ( InvestmentEntity investmentEntity : investmentEntityList ) {
            list.add( toInvestmentResponseDTO( investmentEntity ) );
        }

        return list;
    }
}
