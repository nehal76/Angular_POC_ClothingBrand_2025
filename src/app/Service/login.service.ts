import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedIn = false;
  public currentUser = '';

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'admin' || username=== 'nehal' && password === '1234') {
      this.isLoggedIn = true;
      this.currentUser = username;
      console.log('login service working');
      return true;
      
    }
    return false;
  }
  logout() {
    this.isLoggedIn = false;
  }

  getLoginStatus() {
    return this.isLoggedIn;
  }
}
