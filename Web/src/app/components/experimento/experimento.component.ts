import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute, Params} from '@angular/router'

import { ExperimentoInterfaces} from 'src/app/models/experimento-interfaces';


@Component({
  selector: 'app-experimento',
  templateUrl: './experimento.component.html',
  styleUrls: ['./experimento.component.css']
})
export class ExperimentoComponent implements OnInit {

  
  public experimento: ExperimentoInterfaces = {
    id: "",
    nombreExperimento:"",
    preguntaExperimento: "",
    idTema: ""
  }

  constructor(
    private dataApi: DataApiService,
    private route : ActivatedRoute
  ) { }

    

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    console.log("Entro: " + id)
    this.cargarUnExperimento(id);
  }

  cargarUnExperimento(id){
    this.dataApi.cargarUnExperimento(id)
    .subscribe(
      experimento => {
        console.log(experimento)
        this.experimento = experimento;
      }
    )
  }


}
