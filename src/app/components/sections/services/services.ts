import { Component } from '@angular/core';
import { Service } from '../../../server/service';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services:any = []
  constructor(private service: Service) {}
ngOnInit(){
  this.service.userInfo$.subscribe(userInfo => {
    this.services = userInfo.services;
  });
}
}
