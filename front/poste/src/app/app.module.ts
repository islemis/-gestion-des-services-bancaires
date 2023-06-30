import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutComponent } from './ajout/ajout.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddComponent } from './add/add.component';
import { DemandecarteComponent } from './demandecarte/demandecarte.component';
import { LesdemandescComponent } from './lesdemandesc/lesdemandesc.component';
import { DemandechequierComponent } from './demandechequier/demandechequier.component';
import { LescomptesComponent } from './lescomptes/lescomptes.component';
import { ChequierComponent } from './chequier/chequier.component';

import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    AjoutComponent,
    AcceuilComponent,
    AddComponent,
    DemandecarteComponent,
    LesdemandescComponent,
    DemandechequierComponent,
    LescomptesComponent,
    ChequierComponent,

    LoginComponent,
    ListComponent,
    UpdateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
