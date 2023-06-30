import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjoutComponent } from './ajout/ajout.component';
import { AddComponent } from './add/add.component';
import { DemandecarteComponent } from './demandecarte/demandecarte.component';
import { LesdemandescComponent } from './lesdemandesc/lesdemandesc.component';
import { DemandechequierComponent } from './demandechequier/demandechequier.component';
import { LescomptesComponent } from './lescomptes/lescomptes.component';
import { ChequierComponent } from './chequier/chequier.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'update/:idc',
    component:UpdateComponent },
  
 
  {
    path: 'comptes',
    component:LescomptesComponent },
    {
      path: 'chequier',
      component: ChequierComponent },
      {
        path: 'list',
        component: ListComponent },
  {
    path: 'Lesdemandeschequiers',
    component:DemandechequierComponent  },
  {
    path: 'Lesdemandesc',
    component:LesdemandescComponent    },
    {
      path: 'login',
      component: LoginComponent },
   
  {
    path: 'add',
    component: AddComponent    },
   
      {
        path: 'ajout',
        component: AjoutComponent   },
        {
          path: 'acceuil',
          component:  AcceuilComponent    },
          {
            path: 'demandecarte',
            component:  DemandecarteComponent    }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
