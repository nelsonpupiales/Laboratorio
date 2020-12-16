/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.resource;

import com.nelsonpupiales.ApiRestFull.model.Materia;
import com.nelsonpupiales.ApiRestFull.repository.MateriaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE})
//@CrossOrigin(origins = "http://localhost:4200")

public class MateriaController {

    @Autowired
    private MateriaRepository repository;

    //Almacena información de la Materia
    @PostMapping("/guardarMateria")
    public String saveMateria(@RequestBody Materia materia) {
        repository.save(materia);
        System.out.println("Se creo nuevo materia con el ID = " + materia.getId() + "...");
        return "Su materia fue agregada: " + materia.getId();
    }

    //Obtengo las materias del Docente que va dictar
    @GetMapping("/cargarMaterias/{idDocente}")
    public List<Materia> getTemaIdDocente(@PathVariable String idDocente) {
        return repository.findByIdDocente(idDocente);
    }
          
        
    //Carga una sola materia por el ID
    @GetMapping("/detalleUnaMateria/{id}")
    public Optional<Materia> getOneMateria(@PathVariable String id) {      
        System.out.println("Se ha seleccionado una sola materia con el ID = " + id + "...");
        return repository.findById(id);            
    }
    
    
    //Borra una materiaa
    @DeleteMapping("/borrarMateria/{id}")
    public ResponseEntity<String> deleteMateria(@PathVariable("id") String id) {
        System.out.println("Se elimino la materia con el ID = " + id + "...");
        repository.deleteById(id);
        return new ResponseEntity<>("La materia ha sido eliminado!", HttpStatus.OK);
    }
      
    
    
    //---------------------------------------------  MOVIL  ---------------------------------------------
    
          
    //Carga una sola materia por el CODIGO
    @GetMapping("/detalleCodeMateria/{codigoMateria}")
    public Optional<Materia> getOnecodigoMateria(@PathVariable String codigoMateria) {      
        System.out.println("Se ha seleccionado una sola materia con el ID = " + codigoMateria + "...");
        return repository.findBycodigoMateria(codigoMateria);            
    }

    
    
    //Carga lista de materias por el Codigo Materia
    @GetMapping("/CodeMateriaList/{id}")
    public List<Materia> getCodigoMateria(@PathVariable String id) {
        return repository.findByid(id);
    }
    
    
}
