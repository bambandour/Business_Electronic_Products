import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { NavBarreComponent } from './nav-barre/nav-barre.component';
import { ListComponent } from './list/list.component';
import { ProductPipe } from './product.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VenteComponent } from './vente/vente.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavBarreComponent,
    ListComponent,
    ProductPipe,
    VenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
