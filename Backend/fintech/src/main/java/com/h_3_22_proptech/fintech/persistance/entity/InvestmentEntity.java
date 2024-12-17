package com.h_3_22_proptech.fintech.persistance.entity;

import com.h_3_22_proptech.fintech.enums.StatusTransaction;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;

@Entity
@Data
public class InvestmentEntity {

    @Id
    @UuidGenerator
    private String idInvestment;

    private String name;

    private double deposit;

    private double nPayments;

    private double TIR;

    private double profit;

    private double capital;

    @Enumerated(EnumType.STRING)
    private StatusTransaction status;

    @ManyToOne
    private PersonaFisicaEntity personaFisicaEntity;

    @ManyToOne
    private PersonaJuridicaEntity personaJuridicaEntity;

    @CreationTimestamp
    private LocalDateTime dateCreated;

    @UpdateTimestamp
    private LocalDateTime dateUpdated;

}
