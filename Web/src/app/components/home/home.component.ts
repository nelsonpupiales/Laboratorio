import { Component, OnInit, ViewChild } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { NgForm } from '@angular/forms';
import { LibroInterfaces } from 'src/app/models/libro-interfaces';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = '';

  //Interfaces
  libros = null;
  
  public libro : LibroInterfaces = {
    id:"",
    bookName: "",
    authorName: ""
  }
  
  
  constructor( 
    private dataApi: DataApiService
    ) { }

  // private docentes: DocenteInterfaces;
  

  ngOnInit(): void {
    this.message = '';
    this.getBooke();     
  }

  //Obtiene todos los datos de la base "Libros"
  getBooke(){
    console.log("Cargar lista de libros...");
    this.dataApi.getAllBooks()
    .subscribe(
      result => {
        console.log(result)
        this.libros = result
      }      
    );    
  }


  getDatails(id){
    console.log(id)    
    this.dataApi.getDatails(id)
    .subscribe(
      result => {
        console.log(result)
        this.libros= result;
      }               
    );        
  }

  

  id : string;
  bookName: string;
  authorName: string;  
  borrar(){
    console.log("Borrar")
    this.libro.id = '';
    this.libro.bookName = '';
    this.libro.authorName = '';
  }




  //Almacena informacion en la base de datos "Libros"
  enviar(libro){ 
    const post=
    {
        'id' : this.libro.id,
        'bookName' : this.libro.bookName,
        'authorName' : this.libro.authorName
    };    
    this.dataApi.save(libro)
    .subscribe(response =>{
      console.log(response);               
      this.getBooke();
      this.libro.id = '';
      this.libro.bookName = '';
      this.libro.authorName = '';   
    });    
  }


  //Borrar Libro
  delete(id){
    console.log(id)
    if(confirm("Seguro quiere eliminar el Libro"))
    this.dataApi.deleteCustomer(id)
    .subscribe(data => {
        console.log(data)
        this.getBooke();         
      },
      error => console.log('ERROR: ' + error));        
  }


  //Actualizar Libro
  update(id){
    this.dataApi.getDatails(id)
    .subscribe(
      libro =>{
        console.log(libro)
        this.libro = libro;
      }
    );
  }

}
