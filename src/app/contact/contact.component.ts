import { Component } from '@angular/core';
import { ApiservicesService } from '../service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  currentRouter = this.router.url;
  submitted = false;
  message = false;
  error = false;
  contactform = this.fb.group({
    name: ['', Validators.required],
    senderEmail: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  constructor(
    public fb: FormBuilder,
    private ApiService: ApiservicesService,
    private router: Router
  ) { }

  onSubmit() {
    console.log(this.contactform.value);
    if (this.contactform.valid) {
      this.message = true;
      return this.ApiService.createMail(this.contactform.value).subscribe({
        complete: () => {
          console.log('inside Apiservice');
          this.message = false;
          this.submitted = true;
          this.contactform.reset();
          this.error = false;
          this.router.navigate([this.currentRouter]);
          // alert('Message send successfully!');
        },
        error(e) {
          return e;
        },
      });
    }
    this.error = true;
    return false;
  }
  callme() {
    const num = document.createElement('a');
    num.href = 'tel:+919149159762';
    num.click();
  }
  mailme() {
    const mail = document.createElement('a');
    mail.href =
      'mailto:anirudhkashyap67@gmail.com?subject=personal mail(Portfolio) %20Subject&body=Your%20Message';
    mail.click();
  }
  location() {
    console.log('location');
    const location = document.createElement('a');
    location.href = 'https://maps.google.com/?q=28.819609,78.776186&entry=gps';
    location.click();
  }
}
