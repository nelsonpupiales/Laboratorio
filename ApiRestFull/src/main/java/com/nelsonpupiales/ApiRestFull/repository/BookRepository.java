/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.repository;

import com.nelsonpupiales.ApiRestFull.model.Book;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author Nelson Pupiales
 */
public interface BookRepository extends MongoRepository<Book, Integer>{

    public void deleteById(String id);

    public Optional<Book> findById(String id);
    
}
