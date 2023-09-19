import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Response } from '../interfaces/product';
import { ParentService } from './parent.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private produitservice:ParentService<Response> ) { }
  // public code!:string
  productSearch(code?:string){
    return this.produitservice?.search(code);
  }
}
