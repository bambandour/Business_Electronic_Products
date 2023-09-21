import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Response, Vente } from '../interfaces/product';
import { ParentService } from './parent.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private produitservice:ParentService<Response,Vente> ) { }

  productSearch(code?:string){
    return this.produitservice?.search(code);
  }
  add(commande:Vente){
    return this.produitservice?.add(commande)
  }
  
}
