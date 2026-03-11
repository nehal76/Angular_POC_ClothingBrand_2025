import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { APIService } from '../Service/api.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  userPrintData: any | string[];
             

  getUserData(userData: string[]) {
    console.log(userData);
    this.userPrintData = userData;
  }

  data: any;
  mobileProductData: any;
  postCall: any

  
  constructor(private mobileApi: APIService, private post: APIService) {}

  
  ngOnInit() {
    this.mobileApi.mobilePhoneData().subscribe((data: any) => {
      this.mobileProductData = data;
    });
  }


  parentPostApiCall() {
    this.post.postApiCall().subscribe((data) => {
      this.postCall = data;
      console.log('post api call from Parent comp', data);
    });
  }
}
