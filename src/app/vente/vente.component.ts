import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  @Input() productForm!:FormGroup
  // product!:Product
  
  constructor(private productService:ProduitService, private fb: FormBuilder){
    this.productForm = this.fb.group({
      paniers: this.fb.array([]) 
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
  
  validatedCommande(){
    const productData=this.productForm.value
    const formattedData = {
      montant:this.listComponent.productForm.value.totaux,
      reduction:this.listComponent.productForm.value.remise,
      client_id:1,
      user_id:1,
      produits:this.listComponent.paniers.value,
      // produits:[
      //   {
      //     produit_succursale_id:1,
      //     quantite_vendu:1,
      //     prix_vente:1,
      //   },
      // ],
      montant_payer:this.listComponent.productForm.value.totaux,
    };
    console.log(formattedData);
    console.log(this.listComponent.paniers.value);
    
    this.productService.add(formattedData).subscribe((res)=>{
      console.log(res);
      
    })

  }
}
