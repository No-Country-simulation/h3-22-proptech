package com.h_3_22_proptech.fintech.controller;

import com.h_3_22_proptech.fintech.dto.request.InvestmentRequestDTO;
import com.h_3_22_proptech.fintech.dto.response.*;
import com.h_3_22_proptech.fintech.service.IInvestmentService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/api/investment")
public class InvestmentController {

    @Autowired
    private IInvestmentService investmentService;


    @Operation(description = "Listar Todas las Inversiones")
    @GetMapping
    public ResponseEntity<?> getAll(){

        List<InvsPersonaResponseDTO> list = investmentService.getAllInvPersona();

        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @Operation(description = "Obtener una inversión por su ID")
    @GetMapping("/{idInv}")
    public ResponseEntity<?> getInvestmentById(@PathVariable String idInv){

        InvestmentResponseDTO inv = investmentService.getInvestmentById(idInv);

        return ResponseEntity.status(HttpStatus.OK).body(inv);
    }

    @Operation(description = "Listar Inversiones de una Persona")
    @GetMapping("/listInv/{idPersona}")
    public ResponseEntity<?> getIntvestments(@PathVariable String idPersona){

        List<InvestmentResponseDTO> listInv = investmentService.listInvestmentsByPersona(idPersona);

        return ResponseEntity.status(HttpStatus.OK).body(listInv);
    }


    @Operation(description = "Simular una Inversión - No persiste")
    @GetMapping("/simulation")
    public ResponseEntity<?> createSimulation(@RequestParam("deposit") Double deposit,
                                              @RequestParam ("nPayments") Integer nPayments
                                                     ) {
        double TIR = 1.1;
        double capital = Math.round((deposit * TIR)* 100.0) / 100.0;
        double profit = Math.round((capital - deposit)* 100.0) / 100.0;

        InvestmentSimulationResponseDTO investment = new InvestmentSimulationResponseDTO();
        investment.setTIR(TIR);
        investment.setDeposit(deposit);
        investment.setNPayments(nPayments);
        investment.setProfit(profit);
        investment.setCapital(capital);

    return ResponseEntity.status(HttpStatus.CREATED).body(investment);
    }


    @Operation(description = "Crear una Inversión")
    @PostMapping
    public ResponseEntity<?> createInvestment(@RequestBody InvestmentRequestDTO investmentRequestDTO){

        InvestmentResponseDTO investmentResponseDTO= investmentService.createInvestment(investmentRequestDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(investmentResponseDTO);

    }
}


