import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataApiService } from 'src/app/services/data-api.service';
import { TemaInterfaces } from 'src/app/models/tema-interfaces';

@Component({
  selector: 'app-panel-tema',
  templateUrl: './panel-tema.component.html',
  styleUrls: ['./panel-tema.component.css']
})
export class PanelTemaComponent implements OnInit {

  temas = null;
  public tema: TemaInterfaces = {
    id: "",
    nombreTema: "",
    introduccionTema: "",
    instruccionesTema: "",
    idMateria: ""
  }
  
  
  constructor(
    private route: ActivatedRoute,
    private dataApi: DataApiService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    console.log("Entro: " + id)
    this.cargarUnTema(id);
  }


  cargarUnTema(id){
    this.dataApi.cargarUnTema(id)
    .subscribe(
      tema => {
        console.log(tema)
        this.tema = tema;
      }
      
    )
  }
   
}
