import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import { EstudianteInterfaces } from 'src/app/models/estudiante.interfaces';

import { DataApiService } from 'src/app/services/data-api.service';


@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss'],
})
export class MateriaComponent implements OnInit {

  nombreEstudiante = String;

  public estudiante: EstudianteInterfaces = {
    id: "",
    nombreEstudiante: "",
    apellidoEstudiante: "",
    correoEstudiante: "",
    usuarioEstudiante: "",
    passEstudiante: "",
  }

  constructor(
    private router: Router,
    public alertController: AlertController,
    private dataApi: DataApiService,
    public toastController: ToastController
  ) {}

  ngOnInit(): void {
    let idEstudiante = this.dataApi.cargaIdLS();
    console.log("Entro: " + idEstudiante)    
    this.cargaEstudiante(idEstudiante);
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  sensor() {
    this.router.navigate(['/sensor']);
  }

  

  //Agrega una nueva Materia
  async addMateria() {
    console.log('materia');
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Materia',
      subHeader: 'Ingrese el codigo para acceder a la materia.',
      inputs: [
        {
          name: 'codigoMateria',
          type: 'text',
          placeholder: 'Codigo'
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
            console.log(alertData.codigoMateria);
            //En esta parte el estudiante se matricula en la materia            
          }
        }
      ]
    });
    await alert.present();
  }



  async cargaEstudiante(idEstudiante) {
    (await this.dataApi.cargaEstudiante(idEstudiante))
      .subscribe(
        async estudiante => {
          console.log(estudiante)
          this.nombreEstudiante = estudiante['nombreEstudiante'];

        });
  }

  
  logout() {
    localStorage.clear();
    this.doRefreshLogin();  
    this.router.navigate(['/home']);
  }

  //Regresca la pagina
  doRefresh(event) {
    console.log('Recarga la página');
    setTimeout(() => {     
      event.target.complete();
    }, 2000);
  }

  //Refresca a la hora de cargar el login
  doRefreshLogin() {
    console.log('Recarga la página');
    setTimeout(() => {          
    }, 1000);
  }




}
