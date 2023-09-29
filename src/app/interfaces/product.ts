
export interface Response {
    message:string;   
    data: Product[];
    success:boolean,
    error:string;
}

export interface Product {
    id: number
    libelle: string
    code: string
    photo: string
    description: string
    marque:Marque
    categorie:Categorie
    caracteristiques: Caracteristique[]
    succursales: Succursale[]
}

export interface Marque {
    id: number
    libelle: string
}

export interface Categorie {
    id: number
    libelle: string
}

export interface Caracteristique {
    id: number
    caracteristique_id?:Categorie
    libelle: string
    valeur: string

}

// export interface Caracteristique {
//   id: number
//   libelle: string
//   valeur: string
// }
  
export interface Succursale {
    id:number
    quantite: number
    prix: number
    prixEnGros?: number
    succursale: string
    produit_succursale_id: number
}
export interface data{
    id:number;
    libelle:string,
    prix:number,
    quantite:number,
    total:number,
}

export interface Vente {
    // id: number
    montant: number
    reduction: number
    client_id: number
    user_id: number|null
    produits: Commande[]|data[]
    montant_payer:number
  }
  
  export interface Commande {
    produit_succursale_id: number
    quantite: number
    prix: number
  }

  export interface User{
    id:number
    login:string
    nomComplet:string
    telephone:string
    succursale_id:number
    succursale:string
  }

  export interface Connexion {
    token:string
    user:User
  }


  export interface All{
    marques:Marque[]
    categories:Categorie[]
    caracteristiques:Caracteristique[]
  }



