package com.h_3_22_proptech.fintech.persistance.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class PersonaFisicaEntity {

    @Id
    @UuidGenerator
    private String idPF;

    private String name;

    private String lastName;

    private LocalDate birthDate;

    private String nacionality;

    private String dni;

    private String phone;

    private String provincia;

    private String localidad;

    private String address;

    private String postalCode;

    @OneToOne
    @JoinColumn(name = "id_user")
    private UserEntity userEntity;

    @OneToMany(mappedBy = "personaFisicaEntity", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<LoanEntity> loanEntityList;

    @OneToMany(mappedBy = "personaFisicaEntity", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<InvestmentEntity> investmentEntityList;

    @CreationTimestamp
    private LocalDateTime dateCreated;

    @UpdateTimestamp
    private LocalDateTime dateUpdated;
}
