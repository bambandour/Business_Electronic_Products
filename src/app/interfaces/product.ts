
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
    details: Detail[]
}

export interface Caracteristique {
    id: number
    libelle: string
    valeur: string
}
  
export interface Detail {
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
