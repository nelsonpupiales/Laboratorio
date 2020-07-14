/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.resource;

import com.nelsonpupiales.ApiRestFull.model.Docente;
import com.nelsonpupiales.ApiRestFull.repository.DocenteRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nelson Pupiales
 */

@RestController

//Spring REST CORS
//@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@CrossOrigin(origins = "http://localhost:4200")

public class DocenteController {
    @Autowired
    private DocenteRepository repository;
    
    @PostMapping("/guardarDocente")
    public String saveDocente(@RequestBody Docente docente) {        
        repository.save(docente);
	System.out.println("Se creo nuevo docente con el ID = " + docente.getId() + "...");
        return "Su información fue agregada: " + docente.getId();                
    }
    
    
    //Obtener valores de Docente por medio del userDocente
    @GetMapping("/datosDocenteUser/{userDocente}")
    public Optional<Docente> getOneUser(@PathVariable String userDocente) {   
	System.out.println("Usuario:" + userDocente);
        return repository.findByuserDocente(userDocente);                
    }
    
    //Obtener valores de Docente por medio del userDocente
    @GetMapping("/datosDocentePass/{passDocente}")
    public Optional<Docente> getOnePass(@PathVariable String passDocente) {   
	System.out.println("Pass:" + passDocente);
        return repository.findBypassDocente(passDocente);                
    }
    
   
}
