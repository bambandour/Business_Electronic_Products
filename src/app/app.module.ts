import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { NavBarreComponent } from './nav-barre/nav-barre.component';
import { ListComponent } from './list/list.component';
import { ProductPipe } from './product.pipe';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VenteComponent } from './vente/vente.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { LoginComponent } from './login/login.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './auth.interceptor';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavBarreComponent,
    ListComponent,
    ProductPipe,
    VenteComponent,
    ListProduitComponent,
    LoginComponent,
    AjoutProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientXsrfModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
