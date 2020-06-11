/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.repository;

import com.nelsonpupiales.ApiRestFull.model.Docente;
import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author Nelson Pupiales
 */
public interface DocenteRepository extends MongoRepository<Docente, Integer>{
    
    public void deleteById(String id);

    public Optional<Docente> findByuserDocente(String userDocente);
    
    
    public Optional<Docente> findBypassDocente(String passDocente);
   
    
}
