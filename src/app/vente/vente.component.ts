import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { data, Product } from '../interfaces/product';
import { ListComponent } from '../list/list.component';
import { ProduitComponent } from '../produit/produit.component';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit{

  @ViewChild(ListComponent) listComponent!:ListComponent
  @ViewChild(ProduitComponent) produitComponent!:ProduitComponent
  productForm!:FormGroup
  // product!:Product
  
  constructor(private fb: FormBuilder){
    this.productForm = this.fb.group({
      paniers: this.fb.array([]) // Utilisez le FormArray pour stocker les produits dans le panier
    });
  }
  ngOnInit(): void {
  //  const cartData = JSON.parse(localStorage.getItem('cart')) || []; 
  //   const cartFormArray = this.fb.array(
  //     cartData.map((item:any) =>
  //       this.fb.group({
  //         libelle: [item.libelle],
  //         prix: [item.prix],
  //         quantite: [item.quantite],
  //         total: [item.total]
  //       })
  //     )
  //   );
    //this.productForm.setControl('paniers', cartFormArray);
  }

  addPanier(data:data){  
      const panier = this.fb.group({
      id:this.produitComponent.product[0].id,
      libelle: this.produitComponent.product[0].libelle,
      prix: data.prix,
      quantite: data.quantite,
      total: data.prix*data.quantite
    })
    this.listComponent.paniers.push(panier)
    this.listComponent.calculTotal()
    // this.listComponent.totalNet

  }
  
}
