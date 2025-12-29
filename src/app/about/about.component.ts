import { CommonModule, NgFor } from '@angular/common';
import { Component, input, Signal,Input, signal  } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule, NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
title = 'Velora Clothing' //passing data to about.html via one way binding
message = input(); 





checkUser(){
  console.log("Clicking user");
}

image = [
  {
    img1: 'jpeg (2).jfif',
    img2: 'Our_promise_img.png',
    
  }
]

}
