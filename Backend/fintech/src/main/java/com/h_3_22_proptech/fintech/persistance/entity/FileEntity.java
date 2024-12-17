package com.h_3_22_proptech.fintech.persistance.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;

@Entity
@Data
public class FileEntity {

    @Id
    @UuidGenerator
    private String idFile;

    private String fileName;

    private String filePath;

    @ManyToOne
    private UserEntity user;

    @CreationTimestamp
    private LocalDateTime dateCreated;

    @UpdateTimestamp
    private LocalDateTime dateUpdated;
}
