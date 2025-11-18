import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  standalone: false,
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements AfterViewInit {

  constructor() { }
  Info: any = [
    { title: 'Experience', value: '4+ Years' },
    { title: 'Phone', value: '0201202266876' },
    { title: 'Email', value: 'ahmedmagdyabdalhady@gmail.com' }
  ]
  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000, // مدة الحركة (بالملي ثانية)
      once: true      // الحركة تتكرر مرة واحدة فقط
    });
    AOS.refresh();

  }
  // onCounterChange(newValue: number) {
  //   console.log('Counter value changed to:', newValue);
  // }
}
