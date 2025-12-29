import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingpageComponent } from './shoppingpage/shoppingpage.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path: 'navbar', component:NavbarComponent},
    {path: 'home', component:HomeComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'about', component:AboutComponent},
    {path: 'shopping', component:ShoppingpageComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'login', component:LoginComponent},
    

];
