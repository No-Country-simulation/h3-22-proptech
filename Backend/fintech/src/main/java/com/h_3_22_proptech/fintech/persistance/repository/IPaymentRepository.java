package com.h_3_22_proptech.fintech.persistance.repository;

import com.h_3_22_proptech.fintech.persistance.entity.PaymentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPaymentRepository extends JpaRepository<PaymentEntity, String> {
}
