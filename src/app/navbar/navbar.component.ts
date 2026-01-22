
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { LoginComponent } from '../login/login.component';
import { LoginService } from '../Service/login.service';
import { SearchserviceService } from '../Service/searchservice.service';

// If you're on RxJS 7+, you can also import from 'rxjs' directly.
// Keep it consistent with your project setup.
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgIf,
    ReactiveFormsModule,
    // Keep only truly needed components here.
    // Do NOT import MenSectionComponent/WomenSectionComponent/HomeComponent in Navbar.
    LoginComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // <-- fixed (array)
})
export class NavbarComponent {
  searchControl = new FormControl<string>('');

  constructor(
    public loginService: LoginService,
    private router: Router,
    public searchPr: SearchserviceService
  ) {
    // Emit-only: navbar does not call any API
    this.searchControl.valueChanges
      .pipe(
        debounceTime(250),
        distinctUntilChanged(),
        // ---- DEBUG HOOKS (optional) ----
        tap((raw) => console.log('[NAV] raw input:', raw)),
        tap((raw) => console.log('[NAV] emitted query:', (raw || '').trim()))
      )
      .subscribe((q) => this.searchPr.setQuery((q || '').trim().toLowerCase()));
  }

  ngOnInit(): void {
    // If you want to prime the flow with initial value (optional):
    // this.searchPr.setQuery(this.searchControl.value || '');
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
