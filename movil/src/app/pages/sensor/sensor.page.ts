import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'
import { DataApiService } from 'src/app/services/data-api.service';
import { AlertController, ToastController } from '@ionic/angular';



import { Chart } from 'chart.js';



@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
})
export class SensorPage implements OnInit {


  // Para grafica
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  lineChart: any;
  //---------------------------------------------------------------------------


  nombreExperimento = String;
  preguntaExperimento = String;
  dataExperimento = String;
  labelExperimento = String;


  today: string;

  d: Date = new Date();
  mydate: string;


  constructor(
    private router: ActivatedRoute,
    private dataApi: DataApiService,
    public alertController: AlertController,
    public toastController: ToastController
  ) { }


  ngAfterViewInit() {

  }

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
          console.log(experimento);
          //this.idTema= tema['id'];
          this.nombreExperimento = experimento['nombreExperimento'];
          this.preguntaExperimento = experimento['preguntaExperimento'];
          

          //console.log(experimento['dataExperimento'])
          //console.log(experimento['labelExperimento'])

          //Convierte String a Array valores de x con -y a +y  
          let dataArrayStringToArray = JSON.parse("[" + experimento['dataExperimento'] + "]")
          console.log('array String convertido en array data', dataArrayStringToArray);

          //Coviente a String a Array valores de Label
          let labelArrayStringToArray = JSON.parse("[" + experimento['labelExperimento'] + "]")
          console.log('array String convertido en array label -->', labelArrayStringToArray);

          
          //Envio a Graficar
          this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
              labels: labelArrayStringToArray,
              datasets: [
                {
                  label: 'Puntos de Movimiento',
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: 'rgba(75,192,192,1)',
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'rgba(75,192,192,1)',
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                  pointHoverBorderColor: 'rgba(220,220,220,1)',
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: dataArrayStringToArray,
                  spanGaps: false,
                }
              ]
            }
          });


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
          handler: async (alertData) => {
            console.log('Confirm Ok');

            const toast = await this.toastController.create({
              message: 'Su practica fue agregada.',
              duration: 1000,
              color: 'success',
            });
            toast.present();

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
    var fecha = "Fecha: " + dd + "-" + mm + "-" + yy + " Hora: " + h + "." + m;

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
