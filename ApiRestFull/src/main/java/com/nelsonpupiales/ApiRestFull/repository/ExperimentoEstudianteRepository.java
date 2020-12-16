/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.repository;

import com.nelsonpupiales.ApiRestFull.model.ExperimentoEstudiante;
import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author Nelson Pupiales
 */
public interface ExperimentoEstudianteRepository  extends MongoRepository<ExperimentoEstudiante, Integer>{
            
    public List<ExperimentoEstudiante> findByIdEstudiante(String idEstudiante);
    
    public List<ExperimentoEstudiante> findByIdExperimento(String idExperimento);
    
    public Optional<ExperimentoEstudiante> findById(String id); 
         
}
