import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
import { Service } from '../../../server/service';
import { map } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements AfterViewInit {
  jobTitle: string[] = [];
  Info: any

  constructor(public service: Service) { }
  ngOnInit() {
    this.service.userInfo$.subscribe(userInfo => {
      this.Info = userInfo;
      this.jobTitle = userInfo.jobTitle?.split(' ') || [];
    });
  }
  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000, // مدة الحركة (بالملي ثانية)
      once: true      // الحركة تتكرر مرة واحدة فقط
    });
    AOS.refresh();





  }
}