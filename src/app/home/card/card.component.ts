import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from "@angular/router";
import { MenSectionComponent } from '../../shoppingpage/men-section/men-section.component';
import { routes } from '../../app.routes';
import { WomenSectionComponent } from '../../shoppingpage/women-section/women-section.component';

@Component({
  selector: 'app-card',
  imports: [CommonModule, NgFor, RouterLink, MenSectionComponent, WomenSectionComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  categories = [
    {
      name: 'Men\'s Wear',
      image: 'Men\'s Card1.jpeg',
      routes: '/men'
      
    },
    {
      name: 'Women\'s Wear',
      image: 'womencard.jpg',
      routes: '/women_section'
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



