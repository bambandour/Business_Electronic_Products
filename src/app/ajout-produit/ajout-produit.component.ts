import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Caracteristique, Categorie, Marque, Product } from '../interfaces/product';
import { LoginService } from '../services/login.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent {
  addForm!:FormGroup

  marques:Marque[]=[]
  categories:Categorie[]=[]
  cars:Caracteristique[]=[]

  constructor(private fb:FormBuilder,private productService:ProductService, private userService:LoginService){
    this.addForm=this.fb.group({
      libelle: ['', ],
      prix: ['', ],
      quantite: ['',],
      marque: ['',],
      categorie: ['',],
      code: ['0022104'],
      photo: ['./assets/img/dell.jpeg'],
      succursale_id:[1],
      caracteristiques: this.fb.array([])

    });
  }

  getSuccursale(){
    this.userService.user().subscribe(res=>{
      console.log(res);
    })
  }

  ngOnInit(){
    this.productService.getAll().subscribe(res=>{
      this.marques=res.marques
      this.categories=res.categories
      this.cars=res.caracteristiques
    })
  }

  // loadCar(){
  //   this.productService.getAll().subscribe(res=>{
  //   })
  // }

  get photo(){
    return this.addForm.controls['photo']
  }

  onPhotoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      let reader = new FileReader();
      reader.onload = () => this.addForm.get("photo")?.setValue(reader.result)
      reader.readAsDataURL(input.files[0]);
    }
  }

  get caracteristiques() {
    return this.addForm.get('caracteristiques') as FormArray;
  }

  addCar() {
    this.caracteristiques.push(this.fb.group({
      caracteristique_id: [''],
      libelle: [''],
      valeur: [''],
    }));
  }
  
  removeCar(index: number) {
    this.caracteristiques.removeAt(index);
  }

 
  show(){
    console.log(this.addForm.get('categorie')?.value);
  }

  addProduct(){
    console.log(this.addForm.value.caracteristiques);
    const produitForm=this.addForm.value;
    produitForm.caracteristiques=this.caracteristiques.value.map((car:Caracteristique)=>{
      return{
        caracteristique_id: car.caracteristique_id?.id,
        valeur: car.valeur
      }
    });
    const data={
      libelle:this.addForm.value.libelle,
      code:this.addForm.value.code,
      photo:this.addForm.value.photo,
      marque:this.addForm.value.marque.id,
      categorie:this.addForm.value.categorie.id,
      succursales:[
        {
          succursale_id:this.addForm.value.succursale_id,
          prix:this.addForm.value.prix,
          quantite:this.addForm.value.quantite,
        }
      ],
      caracteristiques:produitForm.caracteristiques
    }
    console.log(data);
    // this.productService.addProduct(data).subscribe(res=>{
    //     console.log(res);
    //     this.addForm.reset();
    //     this.caracteristiques.clear();
    // })
  }





}
