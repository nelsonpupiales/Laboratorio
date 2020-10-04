/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.repository;

import com.nelsonpupiales.ApiRestFull.model.Materia;
import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author Nelson Pupiales
 */
public interface MateriaRepository extends MongoRepository<Materia, Integer> {
    
    public void deleteById(String id);

    public Optional<Materia> findById(String id); 
        
    public Optional<Materia> findBycodigoMateria(String codigoMateria);
        
    public List<Materia> findByIdDocente(String idDocente);
    
    public List<Materia> findByid(String id);
}
