package com.h_3_22_proptech.fintech.persistance.mapper;

import com.h_3_22_proptech.fintech.dto.request.PaymentRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.PaymentResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.PaymentEntity;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface IPaymentMapper {

    PaymentEntity toPaymentEntity (PaymentRequestDTO paymentRequestDTO);

    PaymentResponseDTO toPaymentResponseDTO (PaymentEntity paymentEntity);
}
