import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  liftResume:any=[];
  rightResume:any=[];
infoResume = [
  {
    date: '2014-2015',
    degree: 'Master Degree of Design',
    university: 'Cambridge University',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi sapiente illo. Nobis eaque, autem magni cumque iste maiores perspiciatis suscipit repellat labore deserunt quisquam.',
  },
  {
    date: '2014-2016',
    degree: "Bachelor's Degree of C.A",
    university: 'Cambridge University',
    description:
      '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi sapiente illo. Nobis eaque, autem magni cumque iste maiores perspiciatis suscipit repellat labore deserunt quisquam.',      
  },
   {
    date: '2014-2017',
    degree: 'Master Degree of Design',
    university: 'Cambridge University',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi sapiente illo. Nobis eaque, autem magni cumque iste maiores perspiciatis suscipit repellat labore deserunt quisquam.',
  },
  {
    date: '2014-2018',
    degree: "Bachelor's Degree of C.A",
    university: 'Cambridge University',
    description:
      '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi sapiente illo. Nobis eaque, autem magni cumque iste maiores perspiciatis suscipit repellat labore deserunt quisquam.',      
  },
   {
    date: '2014-2019',
    degree: "Bachelor's Degree of C.A",
    university: 'Cambridge University',
    description:
      '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi sapiente illo. Nobis eaque, autem magni cumque iste maiores perspiciatis suscipit repellat labore deserunt quisquam.',      
  },
   {
    date: '2014-2020',
    degree: "Bachelor's Degree of C.A",
    university: 'Cambridge University',
    description:
      '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi sapiente illo. Nobis eaque, autem magni cumque iste maiores perspiciatis suscipit repellat labore deserunt quisquam.',      
  },
   {
    date: '2014-2020',
    degree: "Bachelor's Degree of C.A",
    university: 'Cambridge University',
    description:
      '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi sapiente illo. Nobis eaque, autem magni cumque iste maiores perspiciatis suscipit repellat labore deserunt quisquam.',      
  },
]

divedsionResume= ()=>{

this.infoResume.forEach((item, index) => {
  if (index % 2 === 0) {
    this.liftResume.push(item);
  } else {
    this.rightResume.push(item);
  }
});
}

ngOnInit(): void {
  this.divedsionResume();
}
}
