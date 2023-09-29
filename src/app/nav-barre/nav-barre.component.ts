import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/product';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-barre',
  templateUrl: './nav-barre.component.html',
  styleUrls: ['./nav-barre.component.css']
})
export class NavBarreComponent {
  current_user!:User

  constructor(private loginService: LoginService, private router:Router){}
  ngOnInit(){
    this.current_user = JSON.parse(localStorage.getItem('current_user')?.toString()!)
  }

  singUp(){
    this.loginService.logout().subscribe(res=>{
      this.router.navigate(['']);
    })
  }
  
  
  
  


}
