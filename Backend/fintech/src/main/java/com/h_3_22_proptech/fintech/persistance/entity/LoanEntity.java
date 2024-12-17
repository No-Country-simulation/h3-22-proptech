package com.h_3_22_proptech.fintech.persistance.entity;

import com.h_3_22_proptech.fintech.enums.StatusTransaction;
import com.h_3_22_proptech.fintech.enums.TypeUser;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class LoanEntity {
    @Id
    @UuidGenerator
    private String idLoan;

    private String name;

    private int nroFee;

    private double capital;

    private double currentCapital;

    private double interest;

    private double amortization;

    private double fee;

    private double balance;

    private double TNA;

    //cantidad de cuotas
    private int nPayments;

    //nro de cuota paga
    private int numberPayFee;

    @Enumerated(EnumType.STRING)
    private StatusTransaction status;

    @ManyToOne
    private PersonaFisicaEntity personaFisicaEntity;

    @ManyToOne
    private PersonaJuridicaEntity personaJuridicaEntity;

    @OneToMany(mappedBy = "loan", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PaymentEntity> payments = new ArrayList<>();

    @CreationTimestamp
    private LocalDateTime dateCreated;

    @UpdateTimestamp
    private LocalDateTime dateUpdated;

}
