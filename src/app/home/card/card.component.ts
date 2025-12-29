import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [CommonModule, NgFor, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  categories = [
    {
      name: 'Men\'s Wear',
      image: 'Men\'s Card1.jpeg',
      
    },
    {
      name: 'Women\'s Wear',
      image: 'womencard.jpg'
    },
    {
      name: 'Kids\' Wear',
      image: 'kids1.jpg'
    },
    {
      name: 'Accessories',
      image: 'Accessories.png'
    },
    {
      name: 'Footwear',
      image: 'Footwear_1.png'
    },
    {
      name: 'Ethnic Wear',
      image: 'Ethnic_Wear_1.png'
    }
  ];
}



