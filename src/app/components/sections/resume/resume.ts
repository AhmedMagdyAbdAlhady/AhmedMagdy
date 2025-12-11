import { Component } from '@angular/core';
import { Service } from './../../../server/service';

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
 
]
constructor(private service: Service){}
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
     this.service.userInfo$.subscribe(userInfo => {
      this.infoResume = userInfo.resume;
    });
  this.divedsionResume();
}
}
