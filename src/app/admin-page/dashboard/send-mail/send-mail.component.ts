import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent {

  to: string;
  subject: string;
  message: string;

  constructor(private httpclient: HttpClient) {}

  sendEmail(): void {
    const emailRequest = {
      to: this.to,
      subject: this.subject,
      message: this.message
    };

    this.httpclient.post('sendemail', emailRequest).subscribe({next : 
      data => {
        console.log('Email sent successfully');
        // Handle success response
      },
      error : error => {
        console.log('Error sending email:')
        // Handle error response
      }
  });
  }
}
