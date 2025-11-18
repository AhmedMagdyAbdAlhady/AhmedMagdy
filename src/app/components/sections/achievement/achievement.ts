import { Component } from '@angular/core';

@Component({
  selector: 'app-achievement',
  standalone: false,
  templateUrl: './achievement.html',
  styleUrl: './achievement.css',
})
export class Achievement {
infoAchievement: any[] = [
  {
    title: 'Awards',
    count:50,
  },
  {
    title: 'Complete Projects',
    count:1200,
  },
  {
    title:"Happy Customers",
    count:1200,
  },
  {
    title:"Certifications ",
    count:50,
  },
]
}
