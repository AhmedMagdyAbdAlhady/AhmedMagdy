import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = [
    {
      icon: 'fa-solid fa-laptop-code',
      link: '/services/web-development',
      title: 'Web Development',
      description: 'I can create a professional and attractive website for you that is tailored to your needs and goals.',
    },
    {
      icon: 'fa-solid fa-mobile-screen-button',
      link: '/services/mobile-app-development',
      title: 'Mobile App Development',
      description: 'I can develop a mobile application for you that is compatible with different operating systems (Android and iOS).',
    },
    {
      icon: 'fa-solid fa-database',
      link: '/services/database-design',
      title: 'Database Design',
      description: 'I can help you design and implement a robust and scalable database for your application.',
    },
    {
      icon: 'fa-solid fa-server',
      link: '/services/backend-development',
      title: 'Backend Development',
      description: 'I can build a powerful and secure backend for your web or mobile application.',
    },
    {
      icon: 'fa-solid fa-cloud',
      link: '/services/cloud-deployment',
      title: 'Cloud Deployment',
      description: 'I can deploy your applications to cloud platforms like AWS, Azure, or Google Cloud.',
    },
    {
      icon: 'fa-solid fa-bug',
      link: '/services/debugging-optimization',
      title: 'Debugging & Optimization',
      description: 'I can help you identify and fix bugs in your existing code and optimize its performance.',
    },
  ];

}
