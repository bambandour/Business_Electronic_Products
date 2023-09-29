import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent {
  products:Product[]=[]
  qtotal!:number
  constructor(private productService:ProductService, private router:Router){}
  ngOnInit(){
    this.getProducts()
  }
  getProducts(){
    this.productService.getProductBysuccursale(1).subscribe(
      (res)=>{
        this.products=res.data
      })
  }

  getTotalQuantity() {
    let totalQuantity = 0;
    for (const product of this.products) {
      totalQuantity += product.succursales[0].quantite;
    }
    return totalQuantity;
  }

  addProduct(){
    this.router.navigate(['/add-product'])
  }
  
}
