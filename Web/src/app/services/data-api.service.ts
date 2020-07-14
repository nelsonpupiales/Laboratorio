import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { isNullOrUndefined } from 'util';
import { DocenteInterfaces } from 'src/app/models/docente-interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  URL = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }



  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });


  //================================================================ Docente ================================================================
  guardarDocente(docente) {
    return this.http.post(this.URL + '/guardarDocente', docente, { responseType: 'text' });
  }




  loginUser(userDocente) {
    return this.http.get(`${this.URL}/datosDocenteUser/${userDocente}`);

  }

  loginPass(passDocente1) {
    return this.http.get(`${this.URL}/datosDocentePass/${passDocente1}`);

  }


  //Selecciona el tutor logeado
  setTutor(tutor): void {
    let tutor_string = JSON.stringify(tutor);
    console.log(tutor_string)
    localStorage.setItem("currentUser", tutor_string);
  }


  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }


  //Cargar tutor dese el localStrore
  getCurrentTutor() {
    let tutor_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(tutor_string)) {
      let docente: DocenteInterfaces = JSON.parse(tutor_string);
      return docente;
    } else {
      return null;
    }
  }


  //================================================================ Materia ================================================================

  //Carga un los materias de un solo ID del docente
  cargarMaterias(idDocente: String) {
    return this.http.get(`${this.URL}/cargarMaterias/${idDocente}`);
  }

  //Guardar materia
  guardarMateria(materia) {
    return this.http.post(this.URL + '/guardarMateria', materia, { responseType: 'text' });
  }

  //Borrar materia
  borrarMateria(id: String) {
    console.log(id);
    return this.http.delete(`${this.URL}/borrarMateria/${id}`, { responseType: 'text' });
  }

  //Cargar una materia
  detalleUnaMateria(id: String) {
    return this.http.get(`${this.URL}/detalleUnaMateria/${id}`);
  }



  //================================================================ Tema ================================================================

  //Carga un los temas de un solo libro
  cargarTemas(idMateria: String) {
    return this.http.get(`${this.URL}/cargarTemas/${idMateria}`);
  }

  //Almacenar Tema
  guardarTema(tema) {
    return this.http.post(this.URL + '/guardarTema', tema, { responseType: 'text' });
  }

  //Borrar materia
  borrarTema(id: String) {
    return this.http.delete(`${this.URL}/borrarTema/${id}`, { responseType: 'text' });
  }


  //Cargo detalles de un solo tema
  cargarUnTema(id: String) {
    return this.http.get(`${this.URL}/cargaUnTema/${id}`);
  }



  //================================================================ Experimento ================================================================


  //Carga lista de experimentos
  cargarExperimentos(id: String) {
    return this.http.get(`${this.URL}/cargarExperimentos/${id}`);
  }


  //Cargo detalles de un solo tema
  cargarUnExperimento(id: String) {
    return this.http.get(`${this.URL}/cargarUnExperimento/${id}`);
  }


  //Almacenar Experimento
  guardarExperimento(experimento) {
    return this.http.post(this.URL + '/guardarExperimento', experimento, { responseType: 'text' });
  }


  //Borrar experimento
  borrarExperimento(id: String) {
    return this.http.delete(`${this.URL}/borrarExperimento/${id}`, { responseType: 'text' });
  }
}
