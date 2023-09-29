import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { All, Product, Response } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public api:string=environment.apiUrl

  constructor(private http:HttpClient) { }
  getProductBysuccursale(id:number):Observable<Response>{
    return this.http.get<Response>(this.api+'succursales/'+id+'/products')
  }

  getAll():Observable<All>{
    return this.http.get<All>(this.api+'all')
  }

  addProduct(product:Product|any){
    return this.http.post(this.api+'product',product)
  }
}
