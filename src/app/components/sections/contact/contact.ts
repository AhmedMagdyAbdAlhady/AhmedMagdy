import { Component } from '@angular/core';
import { Service } from '../../../server/service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  infoContact: any[] = [
  ]
  constructor(public Service: Service) { }
  ngOnInit(): void {
    this.Service.userInfo$.subscribe(data => {
      this.infoContact = data.contact;
    })
  }
}