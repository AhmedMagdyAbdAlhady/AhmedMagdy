import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: false,
  templateUrl: './progress.html',
  styleUrl: './progress.css',
})
export class Progress {
  @Input() count = 0;
  @Input() EndTarget: number = 100;
  @Input() title: string = '';

  constructor(private el: ElementRef) { }

  onCounterChange(newValue: number) {
    this.el.nativeElement.querySelector('.counter-display').style.width = newValue + '%';
  }
}
