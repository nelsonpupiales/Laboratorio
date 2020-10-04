/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString
/**
 *
 * @author Nelson Pupiales
 */

@Document(collection = "ExperimentoEstudiante")

public class ExperimentoEstudiante {
    @Id
    private String id;
    private String idExperimento;
    private String idEstudiante;
    private String datoSensor;
    private String respuestaExperimento;
    private String fecha;    
}
