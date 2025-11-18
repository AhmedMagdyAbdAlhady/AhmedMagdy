import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
infoTechnicalSkills = [
    { title: 'HTML', percentage: 98 },
    { title: 'CSS', percentage: 97 },
    { title: 'JavaScript', percentage: 95 },
    { title: 'Angular', percentage: 95 },
    { title: 'TypeScript', percentage: 95 },
    { title: 'Node.js', percentage: 90 },
    { title: 'Express.js', percentage: 90 },
    { title: 'MongoDB', percentage: 90 },
    { title: 'MySQL', percentage:  80  },
    { title: 'Git', percentage: 90 },
    { title: 'GitHub', percentage: 90 },
    { title: 'Responsive Design', percentage: 95 },
    
  ];
  infoSoftSkills = [
    { title: 'Teamwork', percentage: 95 },
    { title: 'Communication', percentage: 95 },
    { title: 'Problem-Solving', percentage: 90 },
    { title: 'Time Management', percentage: 85 },
    { title: 'Adaptability', percentage: 80 },
    { title: 'Creativity', percentage: 85 },
    { title: 'Leadership', percentage: 85 },
    { title: 'Work Ethic', percentage: 85 },
    { title: 'Interpersonal Skills', percentage: 80 },
    { title: 'Attention to Detail', percentage: 90 },
    { title: 'Critical Thinking', percentage: 90 },
  ];
}
