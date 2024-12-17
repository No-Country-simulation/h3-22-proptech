package com.h_3_22_proptech.fintech.controller;

import com.h_3_22_proptech.fintech.dto.request.PersonaFisicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.request.UpdatePersonaFisicaRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.PersonaFisicaResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.PersonaFisicaEntity;
import com.h_3_22_proptech.fintech.service.IPersonaFisicaService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/api/personaFisica")
public class PersonaFisicaController {

    @Autowired
    private IPersonaFisicaService personaFisicaService;

    @Operation(description = "Listar Todas las Personas Físicas")
    @GetMapping
    public ResponseEntity<?> getAllPF(){

        List<PersonaFisicaResponseDTO> personas = personaFisicaService.getAllPf();

        return ResponseEntity.status(HttpStatus.OK).body(personas);
    }



    @Operation(description = "Buscar una Persona Física")
    @GetMapping("{idPersonaFisica}")
    public ResponseEntity<?> getPersonaFisicaById(@PathVariable String idPersonaFisica){

        PersonaFisicaResponseDTO personaFisicaResponseDTO = personaFisicaService.getPersonaFisicaById(idPersonaFisica);

        return ResponseEntity.status(HttpStatus.OK).body(personaFisicaResponseDTO);

    }

    @Operation(description = "Crear una Persona Física")
    @PostMapping
    public ResponseEntity<?> createPersonaFisica(@RequestBody PersonaFisicaRequestDTO personaFisicaRequestDTO){

        PersonaFisicaEntity personaFisica = personaFisicaService.createPersonaFisica(personaFisicaRequestDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(personaFisica);

    }

    @Operation(description = "Actualizar una Persona Física - Agrega datos de dirección")
    @PutMapping("/update")
    private ResponseEntity<?> updatePersonaFisica(@RequestBody UpdatePersonaFisicaRequestDTO upPf){

        PersonaFisicaEntity personaFisica = personaFisicaService.updatePersonaFisica(upPf);

        return ResponseEntity.status(HttpStatus.CREATED).body(personaFisica);

    }


}
