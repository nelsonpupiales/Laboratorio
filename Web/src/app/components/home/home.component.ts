import { Component, OnInit, ViewChild } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router'

import { LibroInterfaces } from 'src/app/models/libro-interfaces';
import { DocenteInterfaces } from 'src/app/models/docente-interfaces';
import { MateriaInterfaces } from 'src/app/models/materia-interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = '';
  registroFrom: FormGroup;
  hide = true;

  //Interfaces
  libros = null;

  public libro: LibroInterfaces = {
    id: "",
    bookName: "",
    authorName: ""
  }


  public docente: DocenteInterfaces = {
    id: "",
    nombreDocente: "",
    apellidoDocente: "",
    correoDocente: "",
    userDocente: "",
    passDocente: ""
  }


  materias = null;
  public materia: MateriaInterfaces = {
    id: "",
    nombreMateria: "",
    descripcionMateria: "",
    codigoMateria: "",
    idDocente: ""

  }


  constructor(
    private dataApi: DataApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.docente = this.dataApi.getCurrentTutor();
    this.docente.id = this.docente.id;

    //Obtenemos el codigo de tutor
    let idDocente = this.docente.id;
    console.log("Entro: " + idDocente)
    this.cargarMaterias(idDocente);

    this.message = '';

    //Validar botos delformulario de guardar materia 
    this.registroFrom = this.formBuilder.group({
      'nombreMateria': [this.materia.nombreMateria, [Validators.required]],
      'descripcionMateria': [this.materia.descripcionMateria, [Validators.required]],
      'codigoMateria': [this.materia.codigoMateria, [Validators.required]],
    });
  }

  onRegisterSubmit() {
    this.guardarMateria(this.materia);
  }





  //================================================================ Materia ================================================================

  //Carga de Materia
  cargarMaterias(idDocente) {
    console.log(idDocente);
    this.dataApi.cargarMaterias(idDocente)
      .subscribe(
        materia => {
          console.log(materia);
          this.materias = materia;
        });
  }


  //Guardar Materia
  guardarMateria(materia) {
    const post =
    {
      'id': this.materia.id,
      'nombreMateria': this.materia.nombreMateria,
      'descripcionMateria': this.materia.descripcionMateria,
      'codigoMateria': this.materia.codigoMateria,
      'idDocente': this.docente.id,
    };
    this.dataApi.guardarMateria(post)
      .subscribe(
        response => {
          console.log(response);
          this.cargarMaterias(this.docente.id);
          this.materia.id = '';
          this.materia.nombreMateria = '';
          this.materia.descripcionMateria = '';
          this.materia.codigoMateria = '';
        });
  }


  //Borrar Materia
  borrarMateria(id) {
    console.log(id)
    if (confirm("Seguro quiere eliminar el Libro"))
      this.dataApi.borrarMateria(id)
        .subscribe(data => {
          console.log(data)
          this.cargarMaterias(this.docente.id);
          this.borrar();
        },
          error => console.log('ERROR: ' + error));
  }


  //Actualizar materia
  actualizarMateria(id) {
    this.dataApi.detalleUnaMateria(id)
      .subscribe(
        materia => {
          console.log(materia)
          this.materia = materia;
        }
      );
  }




  id: string;
  bookName: string;
  authorName: string;
  borrar() {
    console.log("Borrar")
    this.libro.id = '';
    this.libro.bookName = '';
    this.libro.authorName = '';
  }


}
