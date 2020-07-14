/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.repository;

import com.nelsonpupiales.ApiRestFull.model.Tema;
import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
/**
 *
 * @author Nelson Pupiales
 */
public interface TemaRepository extends MongoRepository<Tema, Integer>{

    public void deleteById(String id);  
    
    public Optional<Tema> findById(String id);
     
    public List<Tema> findByIdMateria(String idMateria);
}