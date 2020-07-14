/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.ApiRestFull.resource;

import com.nelsonpupiales.ApiRestFull.model.Book;
import com.nelsonpupiales.ApiRestFull.repository.BookRepository;
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
import org.springframework.web.bind.annotation.PutMapping;
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

public class BookController {
    @Autowired
    private BookRepository repository;

    @PostMapping("/addBook")
    public String saveBook(@RequestBody Book book) {        
        repository.save(book);
	System.out.println("Se creo nuevo libro con el ID = " + book.getId() + "...");
        return "Libro agregado con la identificación: " + book.getId();                
    }

	@GetMapping("/findAllBooks")
	public List<Book> getBooks() {
		return repository.findAll();
	}

	@GetMapping("/findAllBooks/{id}")
	public Optional<Book> getBook(@PathVariable String id) {      
            System.out.println("Libro seleccionado con el ID = " + id + "...");
            return repository.findById(id);            
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteBook(@PathVariable("id") String id) {
            System.out.println("Se elimino libro con el ID = " + id + "...");                         
            repository.deleteById(id);
            return new ResponseEntity<>("El libro ha sido eliminado!", HttpStatus.OK);
	}
        
        //Actualizar Libro       
        @PutMapping("/book/{id}")
        public ResponseEntity<Book> updateTutorial(@PathVariable("id") String id, @RequestBody Book book) {
        return null;
            //return new ResponseEntity<>("El libro ha sido eliminado!", HttpStatus.OK);
        }
        
}
