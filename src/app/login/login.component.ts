import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}
  username = '';
  password = '';
  errorMessage = '';

  onLogin() {
    if (this.loginService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Inavlid Credentials.';
    }
    console.log('login succesfull', this.username, ':', this.password);
  }
    // Template Driven Logic
  addUser(val: NgForm) {
    console.log('user Info', val);
  }

  // REactive Form Logic

  userreativeProfile = new FormGroup({
    name: new FormControl(' '),
    email: new FormControl(' '),
    password: new FormControl(' '),
  })

  reativeProfile(){
    console.log("Reactive function is working", this.userreativeProfile.value);
    
  }
}
