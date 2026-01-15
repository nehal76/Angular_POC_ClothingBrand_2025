import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule, NgClass, NgStyle],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  products = [
    {name: "Daily Fit Jeans", rating:"****", image: "assets/slim_jeans.jpeg"},
    {name: "Casual Shirts", rating:"***", image: "assets/slim_jeans.jpeg"},
   {name: "Daily Fit Jeans", rating:"****", image: "assets/slim_jeans.jpeg"},
   {name: "Daily Fit Jeans", rating:"****", image: "assets/slim_jeans.jpeg"},
    
  ]

  clickEvent = () => {
    console.log('clicked');
  };

 scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'})
 }

}
