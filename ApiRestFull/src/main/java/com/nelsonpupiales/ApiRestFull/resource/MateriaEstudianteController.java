/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.resource;

import com.nelsonpupiales.ApiRestFull.model.MateriaEstudiante;
import com.nelsonpupiales.ApiRestFull.repository.MateriaEstudianteRepository;
import java.util.List;
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
//@CrossOrigin(origins = "http://localhost:4200")

public class MateriaEstudianteController {
   @Autowired
    private MateriaEstudianteRepository repository; 
   
   //Almacena información de la Materia
    @PostMapping("/guardarMateriaEstudiante")
    public String saveMateriaEstudiante(@RequestBody MateriaEstudiante materiaestudiante) {
        repository.save(materiaestudiante);
        System.out.println("Se creo nuevo materia con el ID = " + materiaestudiante.getId() + "...");
        return "Su materia fue agregada: " + materiaestudiante.getId();
    }
    
    
   //Obtengo los temas de un Libro especifico se lo obtiene con el idLibro
    @GetMapping("/cargaListaMateriasEstudiante/{idEstudiante}")
    public List<MateriaEstudiante> getTemaIdEstudiantes(@PathVariable String idEstudiante) {
        return repository.findByIdEstudiante(idEstudiante);
    }
    
    
    //----------------------------- WEB  -----------------------------
    
    //Obtengo lista de los estudiantes matriculados en una sola materia
    @GetMapping("/cargaListaIdEstudiante/{idMateria}")
    public List<MateriaEstudiante> getIdMateria(@PathVariable String idMateria) {
        return repository.findByIdMateria(idMateria);
    }
}
