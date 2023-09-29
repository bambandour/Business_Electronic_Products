import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Connexion } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public api:string=environment.apiUrl
  constructor(private http:HttpClient) { }
  login(loginData: { login: string; password: string }):Observable<Connexion>{
    return this.http.post<Connexion>(this.api+'login',loginData)
  }
  user(){
    return this.http.get(this.api+'user')
  }

  logout(){
    let token = localStorage.getItem('token');
    localStorage.removeItem('token');
    localStorage.removeItem('current_user');
    return this.http.post(this.api+'logout',token)
  }

  isLoggedIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  get getToken(){
    return localStorage.getItem('token')
  }
}
