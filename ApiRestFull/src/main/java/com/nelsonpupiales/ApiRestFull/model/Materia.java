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
@Document(collection = "Materia")
public class Materia {    
    @Id
    private String id;
    private String nombreMateria;
    private String descripcionMateria;
    private String codigoMateria;
    private String idDocente;
}
