import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute, Params} from '@angular/router'

import { LibroInterfaces } from 'src/app/models/libro-interfaces';
import { TemaInterfaces} from 'src/app/models/tema-interfaces';


@Component({
  selector: 'app-experimento',
  templateUrl: './experimento.component.html',
  styleUrls: ['./experimento.component.css']
})
export class ExperimentoComponent implements OnInit {

  constructor(
    private dataApi: DataApiService,
    private route : ActivatedRoute
  ) { }

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
    this.getDatailsTema(id);
  }


  getDatailsTema(id: String){
    this.dataApi.getDatailsOneTema(id)
    .subscribe(
      tema =>{
        console.log(tema)
        this.tema = tema;
      }
    );
  }

}
