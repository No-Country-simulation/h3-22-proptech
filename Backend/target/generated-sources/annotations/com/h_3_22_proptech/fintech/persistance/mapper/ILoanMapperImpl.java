package com.h_3_22_proptech.fintech.persistance.mapper;

import com.h_3_22_proptech.fintech.dto.response.LoanResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.LoanEntity;
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
public class ILoanMapperImpl implements ILoanMapper {

    @Override
    public LoanResponseDTO toLoanResponseDTO(LoanEntity loanEntity) {
        if ( loanEntity == null ) {
            return null;
        }

        LoanResponseDTO.LoanResponseDTOBuilder loanResponseDTO = LoanResponseDTO.builder();

        loanResponseDTO.nPayments( loanEntity.getNPayments() );
        loanResponseDTO.name( loanEntity.getName() );
        loanResponseDTO.nroFee( loanEntity.getNroFee() );
        loanResponseDTO.capital( loanEntity.getCapital() );
        loanResponseDTO.interest( loanEntity.getInterest() );
        loanResponseDTO.amortization( loanEntity.getAmortization() );
        loanResponseDTO.fee( loanEntity.getFee() );
        loanResponseDTO.balance( loanEntity.getBalance() );
        loanResponseDTO.numberPayFee( loanEntity.getNumberPayFee() );

        return loanResponseDTO.build();
    }

    @Override
    public List<LoanResponseDTO> toLoanResponseDtoList(List<LoanEntity> loadEntityList) {
        if ( loadEntityList == null ) {
            return null;
        }

        List<LoanResponseDTO> list = new ArrayList<LoanResponseDTO>( loadEntityList.size() );
        for ( LoanEntity loanEntity : loadEntityList ) {
            list.add( toLoanResponseDTO( loanEntity ) );
        }

        return list;
    }
}
