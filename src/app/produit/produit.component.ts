import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, Response } from '../interfaces/product';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{

  constructor(private fb:FormBuilder, private productService:ProduitService){
    this.productForm=this.fb.group({
      prix: ['',Validators.required ],
      quantite: ['',Validators.required],
    });
  }
  productForm!:FormGroup
  product!:Product[]
  @Output() addPanier=new EventEmitter()
  defaultProduct!:Product
  noProductFound: boolean = false;
  addproduct!:string
  showModal: boolean = false;
  code:string=""

  ngOnInit(): void {
    this.defaultProduct = {
      id:1,
      libelle: 'Dell',
      code:"DEL-1012",
      photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyl2Ab5M88ohV_8YUvEJKZc6SUTAdAdxEXQw&usqp=CAU",
      description: 'Latitude 3510 Laptop 14.5 HD screen ,10th Intel Core i5-1021U etat neuf autonomie 5h et plus ',
      caracteristiques: [
        { id:1,libelle: 'RAM', valeur: '16Go' },
        { id:2,libelle: 'Disc dur', valeur: '512Go SSD' },
        { id:3,libelle: 'processeur', valeur: '2.7GHz' },
      ],
      details:[
        {
          quantite: 2,
          prix: 150000,
          prixEnGros: 140000,
          succursale: 'succursale A'
        },
      ]
    };

    this.searchProduct()
  }

  get paniers() {
    return this.productForm.get('paniers') as FormArray;
  }

  addConfection() {
    this.paniers.push(this.fb.group({
      libelle: [''],
      prix: [],
      quantite: [],
      total: []
    }));
  }
  
  removeConfection(index: number) {
    this.paniers.removeAt(index);
  }
  
  searchProduct(){
    if (this.code) {
      this.productService.productSearch(this.code).subscribe(
        (res?)=>{
          if (res?.data.length > 0) {
                this.product = res?.data;
                this.noProductFound = false;
              } else {
                this.product = [];
                this.noProductFound = true;
          }   
        }
      )
    }
    
  }

  saveProduct(){
    this.addPanier.emit(this.productForm.value)
  }  
  
}
