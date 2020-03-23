/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.WSLaboratorio.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

/**
 *
 * @author Nelson Pupiales
 */
@Document(collection = "Post")
public class Post {
    
    @Id
    private String id= new ObjectId().toString();
    
    private String nombre;
    
    private String texto;
    
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date fecha = new Date();
    
    private List<Comentario> comentarios = new ArrayList<>();

    
    //Constructor
    public Post() {
    }

    
    
    //Set y Get
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public List<Comentario> getComentarios() {
        return comentarios;
    }

    public void setComentarios(List<Comentario> comentarios) {
        this.comentarios = comentarios;
    }
    
    
    
    
}
