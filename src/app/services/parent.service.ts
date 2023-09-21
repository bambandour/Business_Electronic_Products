import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ParentService <T,U>{
  public api:string=environment.apiUrl
  
  constructor(private http:HttpClient) { }
  search(code?:string):Observable<T>{
    return this.http.get<T>(this.api+'product/search/'+code)
  }

  add(commande:U):Observable<T>{
    return this.http.post<T>(this.api+'commande',commande)
  }


  
  
}
