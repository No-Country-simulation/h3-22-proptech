package com.h_3_22_proptech.fintech.persistance.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class PersonaJuridicaEntity {

    @Id
    @UuidGenerator
    private String idPJ ;

    private String name;

    private String cuit;

    private String country;

    private String phone;

    private String provincia;

    private String localidad;

    private String address;

    private String postalCode;

    @OneToOne
    @JoinColumn(name = "id_user")
    private UserEntity userEntity;

    @OneToMany(mappedBy = "personaJuridicaEntity", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<LoanEntity> loanEntityList;

    @OneToMany(mappedBy = "personaJuridicaEntity", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<InvestmentEntity> investmentEntityList;

    @CreationTimestamp
    private LocalDateTime dateCreated;

    @UpdateTimestamp
    private LocalDateTime dateUpdated;


}
