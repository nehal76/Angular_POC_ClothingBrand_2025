import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-navbar',
  imports: [LoginComponent, RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(public loginService: LoginService, private router: Router){
    
  }
  logout(){
      this.loginService.logout();
      this.router.navigate(['/login']);
    }
}
