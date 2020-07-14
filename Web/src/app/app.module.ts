import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




//HttpClient
import { HttpClientModule } from '@angular/common/http';


//Services
import { DataApiService } from './services/data-api.service';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component'; 
import { TemaComponent } from './components/tema/tema.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ExperimentoComponent } from './components/experimento/experimento.component';
import { RegistroComponent } from './components/user/registro/registro.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { LoginComponent } from './components/user/login/login.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { PanelTemaComponent } from './components/panel-tema/panel-tema.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    ExperimentoComponent,
    RegistroComponent,
    PerfilComponent,
    LoginComponent,
    InicioComponent,
    TemaComponent,
    PanelTemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, AngularEditorModule,MatTabsModule,MatExpansionModule,MatListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
