import { Component } from '@angular/core';
import { Service } from '../../../server/service';

@Component({
  selector: 'app-achievement',
  standalone: false,
  templateUrl: './achievement.html',
  styleUrl: './achievement.css',
})
export class Achievement {
infoAchievement: any[] = [
]
constructor(private service: Service) { }
ngOnInit(): void {
  this.service.userInfo$.subscribe(data => {
    this.infoAchievement = data.achievement;
  })
}}
