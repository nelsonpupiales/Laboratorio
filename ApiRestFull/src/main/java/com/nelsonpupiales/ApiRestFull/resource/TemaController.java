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


public class TemaController {
   @Autowired
   private TemaRepository repository; 
   
   
    @PostMapping("/addTema")
    public String saveTemas(@RequestBody Tema tema) {        
        repository.save(tema);
	System.out.println("Se creo nuevo tema con el ID = " + tema.getId()+ "...");
        return "Tema agregado con la identificación: " + tema.getId();                
    }
    
    //Cargo todos los temas de un solo libro.
    @GetMapping("/findAllTemas")
    public List<Tema> getTemas() {
		return repository.findAll();
    }
    
    //Obtengo los temas de un Libro especifico se lo obtiene con el idLibro
    @GetMapping("/findAllTemas/{idLibro}")
	public List<Tema> getTemaIdLibro(@PathVariable String idLibro) {
	return repository.findByIdLibro(idLibro);
    }
        
    
    //Obtener valores de un solo tema 
    @GetMapping("/findAllOneTema/{id}")
	public Optional<Tema> getOneTema(@PathVariable String id) {
	return repository.findById(id);
    }
        
    
    
    
        

       
   
}
