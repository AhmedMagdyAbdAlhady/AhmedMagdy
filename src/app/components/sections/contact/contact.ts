import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  infoContact = [
    {
      title: 'Address',
      description: '198 West 21th Street, Suite 721 New York NY 10016',
      icon: 'fa-solid fa-signs-post'
    },
    {
      title: 'Phone',
      description: '+1 5589 55488 55s',
      icon: 'fa-solid fa-phone'
    },
    {
      title: 'Email',
      description: 'AhmedMagdyAbdalhady@gmail.com',
      icon: 'fa-solid fa-envelope'
    },
    {
      title: 'Website',
      description: 'AhmedMagdyAbdalhady.com',
      icon: 'fa-solid fa-globe'
    },

  ]
}