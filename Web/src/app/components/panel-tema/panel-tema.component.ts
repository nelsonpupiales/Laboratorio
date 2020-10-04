import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { DataApiService } from 'src/app/services/data-api.service';

import { TemaInterfaces } from 'src/app/models/tema-interfaces';
import { ExperimentoInterfaces } from 'src/app/models/experimento-interfaces';

@Component({
  selector: 'app-panel-tema',
  templateUrl: './panel-tema.component.html',
  styleUrls: ['./panel-tema.component.css']
})
export class PanelTemaComponent implements OnInit {

  panelOpenState = false;

  message = '';
  registroFrom: FormGroup;
  hide = true;

  data: any;

  temas = null;
  public tema: TemaInterfaces = {
    id: "",
    nombreTema: "",
    introduccionTema: "",
    instruccionesTema: "",
    bibliografiaTema: "",
    idMateria: ""
  }

  experimentos = null;
  public experimento: ExperimentoInterfaces = {
    id: "",
    nombreExperimento: "",
    preguntaExperimento: "",
    idTema: ""
  }


  constructor(
    private route: ActivatedRoute,
    private dataApi: DataApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    console.log("Entro: " + id)
    this.cargarUnTema(id);
    this.cargarExperimentos(id);

    //Validar Formulario
    this.registroFrom = this.formBuilder.group({
      nombreExperimento: ['', [Validators.required, Validators.maxLength(400), Validators.minLength(5)]],
      preguntaExperimento: ['', [Validators.required, Validators.maxLength(1000), Validators.minLength(5)]],
    });


  }


  onRegisterSubmit(data) {
    this.guardarExperimento(data);
  }


  //Carga un Tema
  cargarUnTema(id) {
    this.dataApi.cargarUnTema(id)
      .subscribe(
        tema => {
          console.log(tema)
          this.tema = tema;
        }
      )
  }


  cargarTemas(idMateria) {
    this.dataApi.cargarTemas(idMateria)
      .subscribe(
        tema => {
          console.log(tema);
          this.temas = tema;
        });
  }



  //Cargar Experimentos
  cargarExperimentos(idTema) {
    this.dataApi.cargarExperimentos(idTema)
      .subscribe(
        experimento => {
          console.log(experimento)
          this.experimentos = experimento;
        }
      )
  }


  //Guarda un experimento 
  guardarExperimento(data) {  
    console.log(data) 
    const post =
    {
      'id': this.experimento.id,
      'nombreExperimento': this.registroFrom.value.nombreExperimento,
      'preguntaExperimento': this.registroFrom.value.preguntaExperimento,
      'idTema': this.tema.id
    };

    console.log(post)

    
    this.dataApi.guardarExperimento(post)
      .subscribe(
        response => {
          console.log(response);
          this.cargarExperimentos(this.tema.id);
          this.experimento.id = '';
          this.experimento.nombreExperimento = '';
          this.experimento.preguntaExperimento = '';
        });
    
  }



  borrarExperimento(id) {
    console.log(id)
    if (confirm("Seguro quiere eliminar el Experimento"))
      this.dataApi.borrarExperimento(id)
        .subscribe(data => {
          console.log(data)
          this.cargarExperimentos(this.tema.id);
        },
          error => console.log('ERROR: ' + error)
        );
  }

  //Actualizar Experimento
  actualizarExperimento(id) {
    this.panelOpenState = false;
    console.log(id)
    this.dataApi.cargarUnExperimento(id)
      .subscribe(
        experimento => {
          console.log(experimento)
          this.experimento = experimento
        }
      )
  }

}
