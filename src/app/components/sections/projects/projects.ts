import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      col: 4,
      img:"project-2.jpg",
      link:"#project-2",
      title: "Web Design",
      description: "Branding & Illustration Design",
    },
    {
      col: 8,
      img:"project-3.jpg",
      link:"#project-3",
      title: "Web Design",
      description: "Branding & Illustration Design",
    },    
     {
      col: 8,
      img:"project-4.jpg",
      link:"#project-4",
      title: "Web Design",
      description: "Branding & Illustration Design",
    }, 
    {
      col: 4,
      img:"project-5.jpg",
      link:"#project-5",
      title: "Web Design",
      description: "Branding & Illustration Design",
    }, 
    {
      col: 8,
      img:"image_1.jpg",
      link:"#project-7",
      title: "Web Design",
      description: "Branding & Illustration Design",
    }, 
    {
      col: 4,
      img:"project-6.jpg",
      link:"#project-6",
      title: "Web Design",
      description: "Branding & Illustration Design",
    },   
  ]
}
