import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIService } from '../Service/api.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule, NgClass, NgStyle],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  name = '';
  email = '';
  message = '';
  data: any;

  constructor(private formdata: APIService) {}

  products = [
    {
      name: 'Daily Fit Jeans',
      rating: '****',
      image: 'assets/slim_jeans.jpeg',
    },
    { name: 'Casual Shirts', rating: '***', image: 'assets/slim_jeans.jpeg' },
    {
      name: 'Daily Fit Jeans',
      rating: '****',
      image: 'assets/slim_jeans.jpeg',
    },
    {
      name: 'Daily Fit Jeans',
      rating: '****',
      image: 'assets/slim_jeans.jpeg',
    },
  ];

  clickEvent = () => {
    console.log('clicked');
  };
  submitForm(f: any) {
    // console.log('clicked');
    // fetch('https://formspree.io/f/mojedlev', {
    //   method: 'post',

    // body: JSON.stringify({ email: this.email, message: this.message, name: this.name})

    // }).then(res => console.log(res)).catch(err => console.log("error", err));

    if (!f.value) return;

    const payload = f.value;

    this.formdata.formsData(payload).subscribe({
      next: (res) => {
        this.data = res;
        console.log('formspree', res);
        f.resetForm();
      },
      error: (err) => {
        console.log('error', err);
      },
      // this.data = data;
      // console.log("formData", data);
    });
  }

  // submitForm(f: any) {
  //   fetch('https://formspree.io/f/mojedlev', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(f.value)
  //   })
  //   .then(res => res.json())

  //   .then(data => {
  //     console.log('Success:', data);
  //     f.reset();
  //   })
  //   .catch(err => console.error('Error:', err));
  // }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
