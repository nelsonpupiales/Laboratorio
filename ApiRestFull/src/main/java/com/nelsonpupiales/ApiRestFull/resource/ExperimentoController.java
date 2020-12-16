/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.resource;

import com.nelsonpupiales.ApiRestFull.model.Experimento;
import com.nelsonpupiales.ApiRestFull.repository.ExperimentoRepository;
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
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE })
//@CrossOrigin(origins = "http://localhost:4200")


public class ExperimentoController {
    @Autowired
    private ExperimentoRepository repository; 
    
    @PostMapping("/guardarExperimento")
    public String saveTema(@RequestBody Experimento experimento) {        
        repository.save(experimento);
	System.out.println("Se creo nuevo experimento con el ID = " + experimento.getId()+ "...");
        return "Experimento agregado con la identificación: " + experimento.getId();                
    }
    
    
    //Obtengo todos los experimentos de un tema especifico se lo obtiene con el idTema
    @GetMapping("/cargarExperimentos/{idTema}")
    public List<Experimento> getExperientosIdTema(@PathVariable String idTema) {
        return repository.findByIdTema(idTema);
    }
    
    
    //Carga un solo experimento por el ID
    @GetMapping("/cargarUnExperimento/{id}")
    public Optional<Experimento> getOneExperimento(@PathVariable String id) {      
        System.out.println("Se ha seleccionado el experimento con el ID = " + id + "...");
        return repository.findById(id);            
    }
    
    
    //Borra un experimento
    @DeleteMapping("/borrarExperimento/{id}")
    public ResponseEntity<String> deleteExperimento(@PathVariable("id") String id) {
        System.out.println("Se elimino Experimento con el ID = " + id + "...");
        repository.deleteById(id);
        return new ResponseEntity<>("El experimento ha sido eliminado!", HttpStatus.OK);
    }
}
