import { Component } from '@angular/core';
import { Service } from '../../../server/service';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  user:any;
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  constructor(public Service:Service){

  }
  ngOnInit(){
  this.user= this.Service.userInfo;
  }
}
