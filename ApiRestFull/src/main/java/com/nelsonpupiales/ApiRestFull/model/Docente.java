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
@Document(collection = "Docente")
public class Docente {
    @Id
    private String id;
    private String nombreDocente;
    private String apellidoDocente;
    private String correoDocente;
    public String userDocente;
    private String passDocente;     
}


