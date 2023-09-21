
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
    caracteristiques: Caracteristique[]
    succursales: Succursale[]
}

export interface Caracteristique {
    id: number
    libelle: string
    valeur: string
}
  
export interface Succursale {
    id:number
    quantite: number
    prix: number
    prixEnGros: number
    succursale: string
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
    quantite_vendu: number
    prix_vente: number
  }
