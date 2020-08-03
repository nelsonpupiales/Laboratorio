import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { isNullOrUndefined } from 'util';

import { EstudianteInterfaces } from 'src/app/models/estudiante.interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  URL = "http://localhost:8080";

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private http: HttpClient
  ) { }

  async guardarEstudiante(estudiante) {
    return this.http.post(this.URL + '/guardarEstudiante', estudiante, { responseType: 'text' });
  }

  async loginEstudiante(usuarioEstudiante) {
    return this.http.get(`${this.URL}/loginEstudiante/${usuarioEstudiante}`);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  //Carga Tutor desde el localStore
  cargaIdLS(){
    let id = localStorage.getItem("accessToken");
    if (!isNullOrUndefined(id)) {     
      console.log(id)
      return id;
    } else {
      return null;
    }
  }


  //Carga Estudiante
  async cargaEstudiante(id) {
    return this.http.get(`${this.URL}/cargaEstudiante/${id}`);
  }
}
