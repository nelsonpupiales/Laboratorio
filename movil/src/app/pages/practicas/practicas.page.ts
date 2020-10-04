import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'
import { DataApiService } from 'src/app/services/data-api.service';
import { ModalController } from '@ionic/angular';

import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.page.html',
  styleUrls: ['./practicas.page.scss'],
})
export class PracticasPage implements OnInit {

  practicas = null;
 
  
  fecha = String;
  respuestaExperimento = String;
  datoSensor = String;
  constructor(
    private router: ActivatedRoute,
    private dataApi: DataApiService,
    public modalController: ModalController,
    public alertController: AlertController,
  ) { }

  ngOnInit(): void {
    const idExperimento = this.router.snapshot.params["id"];
    console.log("Entro Experimento: " + idExperimento);
    this.cargarPracticas(idExperimento);
  }

  async cargarPracticas(idExperimento){
    console.log("Practicas");
    (await this.dataApi.cargarPracticas(idExperimento))
      .subscribe(
        async practica => {
          console.log(practica);
          this.practicas = practica;
        });
  }


  async presentModal(id) {

    (await this.dataApi.cargarUnaPractica(id))
      .subscribe(
        async practica => {
          console.log(practica);          
          this.fecha = practica['fecha'];
          this.respuestaExperimento = practica['respuestaExperimento'];
          this.datoSensor = practica['datoSensor'];
        });

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Practicas Realizadas',
      subHeader: 'Ingrese el codigo para acceder a la materia.',
      message: 'Feha practica: '+ this.fecha +'<br><br>'+
      'Respuesta:' + this.respuestaExperimento +'<br><br>'+
      'Datos del Sensor: '+ this.datoSensor+'',         
      
      buttons: ['OK']
    });
    await alert.present();
  }
    

}
