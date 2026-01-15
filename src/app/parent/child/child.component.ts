import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { APIService } from '../../Service/api.service';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() getData = new EventEmitter();

  userData = ['Nehal', 'Ahmed', 'Prashant', 'Rajat'];

  // ngOnInit() {
  //   console.log(this.userData);

  //   this.getData.emit(this.userData);
  // }

  name = 'Hello Nehal!';

  data: any;
  constructor(private othermobile: APIService) {}

  helloApi() {
    this.othermobile.anOtherApiCall().subscribe((data: any) => {
      this.data = data;
      console.log('Other Api data call from child Component', data);
    });
  }
}
