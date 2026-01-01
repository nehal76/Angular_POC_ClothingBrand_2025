import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, signal, effect, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, NgClass, NgStyle],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  clickEvent = () => {
    console.log('clicked');
  };

  Clickme(event: any) {
    alert('You have clicked the event binding button' + event);
  }
  //ngClass Example---
  isActive = true;

  toggleActive() {
    this.isActive = !this.isActive;
  }
  // ngClass Example end---

  //ngStyle Example---
  progress = 20;
  progressColor = 'red';

  increaseProgress() {
    this.progress += 10;
    if (this.progress > 70) {
      this.progressColor = 'green';
    }
    if (this.progress > 90) {
      this.progressColor = 'blue';
    }
  }
  //ngStyle Example End---

  name = '';

  categoriess = [
    {
      name: "Men's Wear",
      image: 'Mens_wear.webp',
    },
    {
      name: "Women's Wear",
      image: 'womens.jfif',
    },
    {
      name: "Kids' Wear",
      image: 'kids_wear.jpg',
    },
    {
      name: 'Accessories',
      image: 'Accessories.jpg',
    },
    {
      name: 'Footwear',
      image: 'Footwear_1.jpg',
    },
    {
      name: 'Ethnic Wear',
      image: 'Ethnic_Wear_1.jpg',
    },
  ];
   
  showLogin = true;

  showSignup (){
    this.showLogin = !this.showLogin;
    console.log("Toggeling is from Display", this.showLogin);
  }

   
   

  display:number = 2;

  show(val:number){
    this.display = val;
  }

  searchBox(event: Event){
    this.display= parseInt((event.target as HTMLInputElement).value);
    console.log("searching...",this.display);
  }


 x= signal(10);
 y = signal(20);
 z= computed(()=> this.x() + this.y());

 helloSignal(){
  console.log("the sum is:", this.z());
  this.x.set(200);
  console.log("sum after change the value:", this.z());
 }

 


}
function sumValue(arg0: () => number) {
  throw new Error('Function not implemented.');
}

