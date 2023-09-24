import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() emitClick:EventEmitter<any>=new EventEmitter()
  // totalNet!:number

  constructor(private fb:FormBuilder,private listService: ProduitService){}

  ngOnInit():void{
    this.productForm = this.fb.group({
      paniers: this.fb.array([]),
      totaux:[''],
      remise:[''],
      rendu:[''],
      encaisse:[''],
      quantite:[''],
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
    if (remiseValue > 100 || remiseValue <0) {
      this.productForm.get('remise')?.setErrors({ 'invalidRemise': true });
    } else {
      this.productForm.get('remise')?.setErrors(null);
    }
    
    if (remiseValue ) {
        const reducedTotal = totalCost - (totalCost * (remiseValue / 100));
        this.productForm.get('totaux')?.setValue(reducedTotal)
        this.productForm.get('rendu')?.setValue(montant-reducedTotal)
        return reducedTotal; 
    }
    this.updatePannier
    this.productForm.get('totaux')?.setValue(totalCost)
    this.productForm.get('rendu')?.setValue(montant-totalCost)
    return totalCost; 
  }

  updatePannier(event:Event,index:number){
      //  console.log(this.paniers.value[index].quantite);
      const qte=this.paniers.at(index).get('quantite')?.value;
      const price=this.paniers.at(index).get('prix')?.value;
     const tot= this.paniers.at(index).get('total')?.setValue(price*qte)
     this.productForm.get('totaux')?.setValue(tot)
  }
  onEmitclick(){
    this.emitClick.emit()
  }
  



}
