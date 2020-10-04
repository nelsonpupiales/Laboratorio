/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.repository;

import com.nelsonpupiales.ApiRestFull.model.Estudiante;
import com.nelsonpupiales.ApiRestFull.model.Materia;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author Nelson Pupiales
 */
public interface EstudianteRepository extends MongoRepository<Estudiante, Integer>{
   
    public void deleteById(String id);  
    
    public Optional<Estudiante> findById(String id);
     
    public Optional<Estudiante> findByusuarioEstudiante(String usuarioEstudiante);
                
    //public List<Estudiante> findByIdTema(String id);
}
