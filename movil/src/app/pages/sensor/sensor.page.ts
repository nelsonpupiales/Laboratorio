import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'
import { DataApiService } from 'src/app/services/data-api.service';
import { AlertController, ToastController } from '@ionic/angular';





@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
})
export class SensorPage implements OnInit {

  nombreExperimento = String;
  preguntaExperimento = String;
  today: string;

  d: Date = new Date();




  mydate: string;


  constructor(
    private router: ActivatedRoute,
    private dataApi: DataApiService,
    public alertController: AlertController,
  ) { }

  ngOnInit(): void {

    const now = new Date();
    this.today = now.toISOString();
    console.log(this.d);

    const idExperimento = this.router.snapshot.params["id"];
    console.log("IdExperimento: " + idExperimento);
    this.cargarUnExperimento(idExperimento);

    //Carga nombre del estudiante
    let idEstudiante = this.dataApi.cargaIdLS();
    console.log("IdEstudainte: " + idEstudiante);

  }

  async cargarUnExperimento(idExperimento) {
    console.log(idExperimento);
    (await this.dataApi.cargarUnExperimento(idExperimento))
      .subscribe(
        async experimento => {
          //console.log(experimento);
          //this.idTema= tema['id'];
          this.nombreExperimento = experimento['nombreExperimento'];
          this.preguntaExperimento = experimento['preguntaExperimento'];
        });
  }


  //Agregar una respuesta
  async addRespuesta() {
    console.log('Respuesta');
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Respuesta',
      subHeader: 'Ingrese su respuesta del experimento.',
      inputs: [
        {
          name: 'respuestaExperimento',
          type: 'textarea',
          placeholder: 'Respuesta'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            console.log('Confirm Ok');
            //En esta parte el estudiante se matricula en la materia
            var respuesta = alertData.respuestaExperimento
            //console.log(alertData.respuestaExperimento);
            this.cargarPractica(respuesta);
          }
        }
      ]
    });
    await alert.present();
  }

  async cargarPractica(respuesta) {
    console.log(respuesta);


    //Cargar datos del estudiante
    let idEstudiante = this.dataApi.cargaIdLS();
    console.log("IdEstudainte: " + idEstudiante);

    var id = "";
    var datoSensor = "ddds32323e23e2e23";
    const idExperimento = this.router.snapshot.params["id"];

    //Extraemos la fecha del sistema
    var d = new Date();
    var dd = d.getDate();
    var mm = d.getMonth() + 1;
    var yy = d.getFullYear();

    //Extraemos la hora del sistema
    var h = d.getHours();
    var m = d.getMinutes();
    var fecha = "Fecha: "+ dd + "-" + mm + "-" + yy + " Hora: " + h + "."+m;

    const post = {
      'id': id,
      'idExperimento': idExperimento,
      'idEstudiante': idEstudiante,
      'datoSensor': datoSensor,
      'respuestaExperimento': respuesta,
      'fecha': fecha,
    };
    console.log(post);
    
    (await this.dataApi.guardarExperimentoEstudiante(post))
      .subscribe(
        async data => {
          console.log(data)
          //this.formLogin()
        });
  }

}
