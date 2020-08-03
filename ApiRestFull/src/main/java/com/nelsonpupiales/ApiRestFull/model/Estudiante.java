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

@Document(collection = "Estudiante")

public class Estudiante {
    @Id
    private String id;
    private String nombreEstudiante;
    private String apellidoEstudiante;
    private String correoEstudiante;
    private String usuarioEstudiante;
    private String passEstudiante;
}
