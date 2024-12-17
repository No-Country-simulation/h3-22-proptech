package com.h_3_22_proptech.fintech.persistance.mapper;

import com.h_3_22_proptech.fintech.dto.request.PaymentRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.PaymentResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.PaymentEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-10T16:59:20-0300",
    comments = "version: 1.6.1, compiler: javac, environment: Java 17.0.9 (Oracle Corporation)"
)
@Component
public class IPaymentMapperImpl implements IPaymentMapper {

    @Override
    public PaymentEntity toPaymentEntity(PaymentRequestDTO paymentRequestDTO) {
        if ( paymentRequestDTO == null ) {
            return null;
        }

        PaymentEntity paymentEntity = new PaymentEntity();

        paymentEntity.setPaymentNumber( paymentRequestDTO.getPaymentNumber() );
        paymentEntity.setAmountPaid( paymentRequestDTO.getAmountPaid() );

        return paymentEntity;
    }

    @Override
    public PaymentResponseDTO toPaymentResponseDTO(PaymentEntity paymentEntity) {
        if ( paymentEntity == null ) {
            return null;
        }

        PaymentResponseDTO.PaymentResponseDTOBuilder paymentResponseDTO = PaymentResponseDTO.builder();

        paymentResponseDTO.idPayment( paymentEntity.getIdPayment() );
        paymentResponseDTO.paymentNumber( paymentEntity.getPaymentNumber() );
        paymentResponseDTO.amountPaid( paymentEntity.getAmountPaid() );

        return paymentResponseDTO.build();
    }
}
