import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router){

  }

 
username = '';
password = '';
errorMessage = '';

onLogin(){
  if(this.loginService.login(this.username, this.password)){
    this.router.navigate(['/home']);
  }else{
    this.errorMessage = "Inavlid Credentials."
  }
  console.log("login click", this.username,":", this.password);
  
}


}
