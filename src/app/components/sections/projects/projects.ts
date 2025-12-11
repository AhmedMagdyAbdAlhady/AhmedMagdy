import { Component } from '@angular/core';
import { Service } from '../../../server/service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects:any = [  
  ]
  constructor(private service: Service) {}
  ngOnInit(){
    this.service.userInfo$.subscribe(
      (userInfo) => {
        this.projects = userInfo.projects;
      }
    )
  }
}
