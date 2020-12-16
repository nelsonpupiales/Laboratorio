/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.repository;

import com.nelsonpupiales.ApiRestFull.model.MateriaEstudiante;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author Nelson Pupiales
 */
public interface MateriaEstudianteRepository extends MongoRepository<MateriaEstudiante, Integer>{
    
    public List<MateriaEstudiante> findByIdMateria(String idMateria);
    
    public List<MateriaEstudiante> findByIdEstudiante(String idEstudiante);
}
