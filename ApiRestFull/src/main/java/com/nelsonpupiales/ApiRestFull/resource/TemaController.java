/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.resource;

import com.nelsonpupiales.ApiRestFull.model.Tema;
import com.nelsonpupiales.ApiRestFull.repository.TemaRepository;
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


public class TemaController {
   @Autowired
   private TemaRepository repository; 
   
   
    @PostMapping("/guardarTema")
    public String saveTema(@RequestBody Tema tema) {        
        repository.save(tema);
	System.out.println("Se creo nuevo tema con el ID = " + tema.getId()+ "...");
        return "Tema agregado con la identificación: " + tema.getId();                
    }     
    
    //Obtengo todos los temas de una materia especifico se lo obtiene con el idMateria
    @GetMapping("/cargarTemas/{idMateria}")
    public List<Tema> getTemaIdMateria(@PathVariable String idMateria) {
        return repository.findByIdMateria(idMateria);
    }
    
    //Carga un solo tema por el ID
    @GetMapping("/cargaUnTema/{id}")
    public Optional<Tema> getOneTema(@PathVariable String id) {      
        System.out.println("Se ha seleccionado solo tema con el ID = " + id + "...");
        return repository.findById(id);            
    }
    
    //Borra una materiaa
    @DeleteMapping("/borrarTema/{id}")
    public ResponseEntity<String> deleteTema(@PathVariable("id") String id) {
        System.out.println("Se elimino tema con el ID = " + id + "...");
        repository.deleteById(id);
        return new ResponseEntity<>("El tema ha sido eliminado!", HttpStatus.OK);
    }
    
        
}
