package com.h_3_22_proptech.fintech.persistance.entity;

import com.h_3_22_proptech.fintech.enums.PaymentMethod;
import com.h_3_22_proptech.fintech.enums.StatusTransaction;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;

@Entity
@Data
public class PaymentEntity {

    @Id
    @UuidGenerator
    private String idPayment;

    private int paymentNumber;

    private double amountPaid;

    private LocalDateTime paymentDate;

    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    @Enumerated(EnumType.STRING)
    private StatusTransaction status;

    @ManyToOne
    @JoinColumn(name = "idLoan", nullable = false)
    private LoanEntity loan;

    @CreationTimestamp
    private LocalDateTime dateCreated;

    @UpdateTimestamp
    private LocalDateTime dateUpdated;

}
