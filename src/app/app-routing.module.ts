import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { LoginComponent } from './login/login.component';
import { VenteComponent } from './vente/vente.component';

const routes: Routes = [
  {
    path:'' , component: LoginComponent
  },
  {
    path:'vente' , component: VenteComponent
  },
  {
    path:'list_product' , component: ListProduitComponent
  },
  {
    path:'add_product' , component: AjoutProduitComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
