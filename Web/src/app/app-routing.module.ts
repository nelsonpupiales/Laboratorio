import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { TemaComponent } from 'src/app/components/tema/tema.component';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';
import { PanelTemaComponent} from 'src/app/components/panel-tema/panel-tema.component';
//import { ExperimentoComponent} from 'src/app/components/experimento/experimento.component';


import { RegistroComponent } from './components/user/registro/registro.component';
import { LoginComponent } from './components/user/login/login.component';



const routes: Routes = [
  {path: '', component: InicioComponent },
  {path: 'home', component: HomeComponent },
  {path: 'detalle/:id', component: DetalleComponent },
  {path: 'tema/:id', component: TemaComponent },
  {path: 'panelTema/:id', component: PanelTemaComponent },
  //{path: 'experimento/:id', component: ExperimentoComponent },
  {path: 'user/registro', component: RegistroComponent},
  {path: 'user/login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
