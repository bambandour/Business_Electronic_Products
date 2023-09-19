import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { data } from '../interfaces/product';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  productForm!: FormGroup;
  reduction!:number
  // totalNet!:number

  constructor(private fb:FormBuilder,private listService: ProduitService){}

  ngOnInit():void{
    this.productForm = this.fb.group({
      paniers: this.fb.array([]),
      totaux:[''],
      remise:[Validators.min(0), Validators.max(100)],
      rendu:[''],
      encaisse:[''],
    });
  }

  get paniers(): FormArray {
    return this.productForm.get('paniers') as FormArray;
  }

  addPanier() {
    this.paniers.push(this.fb.group({
      id:[''],
      libelle: [''],
      prix: [''],
      quantite: [''],
      total: [''],
    }));
  }

  removePanier(index: number) {
    this.paniers.removeAt(index);
  }

  calculTotal() {
    const totalCost = this.paniers.controls.reduce((total, panierGroup) => {
      const som = panierGroup.get('total')?.value;
      return total + (som || 0); 
    }, 0);
    const remiseValue = this.productForm.get('remise')?.value  || 0;
    const montant=this.productForm.get('encaisse')?.value
    if (remiseValue ) {
        
        const reducedTotal = totalCost - (totalCost * (remiseValue / 100));
        this.productForm.get('totaux')?.setValue(reducedTotal)
        this.productForm.get('rendu')?.setValue(montant-reducedTotal)
        return reducedTotal; 
    }
    this.productForm.get('totaux')?.setValue(totalCost)
    this.productForm.get('rendu')?.setValue(montant-totalCost)
    return totalCost; 
  }

  updatePannier(event:Event){


  }
  



}
