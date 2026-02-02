import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIService } from '../Service/api.service';
import { FormspreeService } from '../Service/formspree.service';

@Component({
  standalone: true,
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
  sending = signal(false);
  showSucces = true;
  success = signal<string | null>(null);
  error = signal<string | null>(null);

  constructor(private formdata: FormspreeService) {}

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
    this.sending.set(true);
    this.success.set(null);
    this.error.set(null);
    

    if (!f.value) return;
    const payload = f.value;

    this.formdata.formsData(payload).subscribe({
      next: (res) => {
        this.data = res;
        this.success.set('submitted');

        console.log('formspree', res);
        this.sending.set(false);
        f.resetForm();
      },
      error: (err) => {
        console.log('error', err);
        this.error.set("Something Wents wrong!! Please check");
        this.sending.set(false);
        f.resetForm()
        f.untouched()
        f.markAsPristine();
      },
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
