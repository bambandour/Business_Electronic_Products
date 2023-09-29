import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Connexion, User } from '../interfaces/product';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup!:FormGroup

  // current_user!:User

  constructor(private authService: LoginService,private fb:FormBuilder, private router:Router, private userService:UserService) {
    this.formGroup=this.fb.group({
      login: ['',[Validators.required , Validators.minLength(7)]],
      password: ['',[Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit(){ 
  }

  login() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(res => {
        localStorage.setItem('token',res.token)
        localStorage.setItem('current_user',JSON.stringify(res.user))
        this.userService.setCurrentUser(res.user.nomComplet);
        this.router.navigate(['/vente']);
      });
    }
  }
  
  // logout(){
  //   this.authService.
  // }

  user(){
    this.authService.user().subscribe((res)=>{
      // console.log(res);
    })
  }

}
