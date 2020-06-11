import { Component, OnInit } from '@angular/core';

import { DataApiService } from 'src/app/services/data-api.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DocenteInterfaces } from 'src/app/models/docente.interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  registroFrom: FormGroup;
  hide = true;

  public docente : DocenteInterfaces = {
    id:"",
    nombreDocente: "",
    apellidoDocente: "",
    correoDocente: "",
    userDocente: "",
    passDocente: ""
  }


  public docente1 : DocenteInterfaces = {
    id:"",
    nombreDocente: "",
    apellidoDocente: "",
    correoDocente: "",
    userDocente: "",
    passDocente: ""
  }



  constructor(
    private formBuilder: FormBuilder,
    private dataApi: DataApiService
  ) { }

  ngOnInit(): void {
    this.registroFrom = this.formBuilder.group({      
      'userDocente': [this.docente.userDocente, [Validators.required]],
      'passDocente': [this.docente.passDocente, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
    });
  }

  onRegisterSubmit() {
    alert(this.docente.userDocente + ' ' + this.docente.passDocente);
    this.loginDocente(this.docente);    
  }

  loginDocente(docente){
    console.log(docente);    
    var userDocente = this.docente.userDocente
    var passDocente1 = this.docente.passDocente    
    
    //Consulta el USER
    this.dataApi.loginUser(userDocente)
    .subscribe(
      docente =>{
        console.log(docente);
        if (docente == null){
          alert("No se encontro Usuario");
          console.log(passDocente1)
        }
        else{
          //Consulta el PASS 
          this.dataApi.loginPass(passDocente1)
          .subscribe(
            docente1 =>{
              console.log("pass:" + docente1);
              if(docente1 == null){
                alert("Contraseña Incorrecta")
              }else{
                alert("Bienvenido: " + docente1)
              }

            }
          )
        }        
      }
    )  
  }
}
