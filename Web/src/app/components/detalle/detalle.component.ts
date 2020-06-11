import { Component, OnInit } from '@angular/core';

import { DataApiService } from 'src/app/services/data-api.service';

import { ActivatedRoute, Params} from '@angular/router'

import { LibroInterfaces } from 'src/app/models/libro-interfaces';
import { TemaInterfaces} from 'src/app/models/tema-interfaces';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {


  constructor(
    private dataApi: DataApiService,
    private route : ActivatedRoute
  ) { }

 
  public libro : LibroInterfaces = {
    id:"",
    bookName: "",
    authorName: ""
  }

  //Interfaces
  temas = null;

  public tema : TemaInterfaces={
    id: "",
    introduccionTema: "",
    conceptoTema: "",
    categoriaTema: "",
    idLibro:""
  }

 
  ngOnInit(): void {
    
    const id = this.route.snapshot.params["id"];
    console.log("Entro: " + id)
    this.getDatails(id);
    this.listaTemas(id);
  }

  //Carga la descripcion de un libro. 
  getDatails(id: string){
    this.dataApi.getDatails(id)
    .subscribe(
      libro =>{
        console.log(libro)
        this.libro = libro;
      }
    );
  }


  //Carga lista de temas
  listaTemas(id){
    console.log("Temas: " + id);
    this.dataApi.getDatailsTema(id)
    .subscribe(
      tema =>{
        console.log(tema);
        this.temas = tema;
      }
    )
  }




  //Almacena informacion en la base de datos "Libros"
  guardarTema(tema){          
    const post=
    {
        'id' : this.tema.id,
        'introduccionTema' : this.tema.introduccionTema,
        'conceptoTema' : this.tema.conceptoTema,
        'categoriaTema' : this.tema.categoriaTema,
        'idLibro' :  this.route.snapshot.params["id"],
    }; 
    
    console.log(post)
    this.dataApi.guardarTema(post)
    .subscribe(response =>{
      console.log(response);               
      this.listaTemas(this.tema.id);
      //this.libro.id = '';
      //this.libro.bookName = '';
      //this.libro.authorName = '';   
    });    
  }


  



}

