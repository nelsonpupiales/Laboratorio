import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  URL= "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });


  //================================================================ Docente ================================================================
  guardarDocente(docente){
    return this.http.post(this.URL+'/guardarDocente', docente, { responseType: 'text' });
  }


  loginUser(userDocente){
    return this.http.get(`${this.URL}/datosDocenteUser/${userDocente}`);
  
  }

  loginPass(passDocente){
    return this.http.get(`${this.URL}/datosDocentePass/${passDocente}`);
  
  }


  //================================================================ Libro ================================================================
  
  getAllBooks(){
    const url_api = "http://localhost:8080/findAllBooks";
    return this.http.get(url_api);
  }

  
  
  getDatails(id: String){
    return this.http.get(`${this.URL}/findAllBooks/${id}`);
  }
  
  
  save(libro){
    return this.http.post(this.URL+'/addBook', libro, { responseType: 'text' });
  }


  deleteCustomer(id: String) {  
    console.log(id); 
    return this.http.delete(`${this.URL}/delete/${id}`, { responseType: 'text' });
  }

  
  //==========================================  Tema  ==========================================

  //Almacenar Tema
  guardarTema(tema){
    return this.http.post(this.URL+'/addTema', tema, { responseType: 'text' });
  }

  //Carga un los temas de un solo libro
  getDatailsTema(idLibro: String){
    return this.http.get(`${this.URL}/findAllTemas/${idLibro}`);
  }

  //Cargo detalles de un solo tema
  getDatailsOneTema(id: String){
    return this.http.get(`${this.URL}/findAllOneTema/${id}`);   
  }

  

  //==========================================  Experimento  ==========================================
  getDatailsExperimento(id: String){
    return this.http.get(`${this.URL}/findAllTemas/${id}`);
  }


}
