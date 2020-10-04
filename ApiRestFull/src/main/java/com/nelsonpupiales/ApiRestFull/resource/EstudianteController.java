/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.resource;

import com.nelsonpupiales.ApiRestFull.model.Estudiante;
import com.nelsonpupiales.ApiRestFull.model.Materia;
import com.nelsonpupiales.ApiRestFull.repository.EstudianteRepository;


import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nelson Pupiales
 */

@RestController

//Spring REST CORS
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
//@CrossOrigin(origins = "http://localhost:8100")

public class EstudianteController {
    @Autowired
    private EstudianteRepository repository; 
    
    @PostMapping("/guardarEstudiante")
    public String saveEstudiante(@RequestBody Estudiante estudiante) {        
        repository.save(estudiante);
	System.out.println("Se creo nuevo experimento con el ID = " + estudiante.getId()+ "...");
        return "Experimento agregado con la identificación: " + estudiante.getId();                
    }
    
    //Obtener valores de Docente por medio del userDocente
    @GetMapping("/loginEstudiante/{usuarioEstudiante}")
    public Optional<Estudiante> getOneUser(@PathVariable String usuarioEstudiante) {   
	System.out.println("Usuario:" + usuarioEstudiante);
        return repository.findByusuarioEstudiante(usuarioEstudiante);                
    }
    
    //Obtener valores de Docente por medio del userDocente
    @GetMapping("/cargaEstudiante/{id}")
    public Optional<Estudiante> getOneId(@PathVariable String id) {   
	System.out.println("Estudiante:" + id);
        return repository.findById(id) ;
    }
    
  
}
