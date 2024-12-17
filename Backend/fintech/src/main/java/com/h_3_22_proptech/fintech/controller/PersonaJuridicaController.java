package com.h_3_22_proptech.fintech.controller;

import com.h_3_22_proptech.fintech.dto.request.PersonaJuridicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.request.UpdatePersonaJuridicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.PersonaFisicaResponseDTO;
import com.h_3_22_proptech.fintech.dto.response.PersonaJuridicaResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaJuridicaEntity;
import com.h_3_22_proptech.fintech.service.IPersonaJuridicaService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/api/personaJuridica")
public class PersonaJuridicaController {

    @Autowired
    private IPersonaJuridicaService personaJuridicaService;

    @Operation(description = "Listar Todas las Personas Juridicas")
    @GetMapping
    public ResponseEntity<?> getAllPJ(){

        List<PersonaJuridicaResponseDTO> personas = personaJuridicaService.getAllPj();

        return ResponseEntity.status(HttpStatus.OK).body(personas);
    }


    @Operation(description = "Buscar una Persona Jurídica")
    @GetMapping("{idPersonaJuridica}")
    public ResponseEntity<?> getPersonaJuridicaById(@PathVariable String idPersonaJuridica){

        PersonaJuridicaResponseDTO personaJuridicaResponseDTO = personaJuridicaService.getPersonaJuridicaById(idPersonaJuridica);

        return ResponseEntity.status(HttpStatus.OK).body(personaJuridicaResponseDTO);

    }

    @Operation(description = "Crea una Persona Jurídica")
    @PostMapping
    public ResponseEntity<?> createPersonaJuridica(@RequestBody PersonaJuridicaRequestDTO personaJuridicaRequestDTO){

        PersonaJuridicaEntity personaJuridica = personaJuridicaService.createPersonaJuridica(personaJuridicaRequestDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(personaJuridica);

    }
    @Operation(description = "Actualiza una Persona Jurídica - Agrega Datos de dirección")
    @PutMapping("/update")
    private ResponseEntity<?> updatePersonaJuridica(@RequestBody UpdatePersonaJuridicaRequestDTO upPj){

        PersonaJuridicaEntity personaJuridica = personaJuridicaService.updatePersonaJuridica(upPj);

        return ResponseEntity.status(HttpStatus.CREATED).body(personaJuridica);

    }
}
