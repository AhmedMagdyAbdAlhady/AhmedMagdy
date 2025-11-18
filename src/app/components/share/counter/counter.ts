import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  @Input() target: number = 0;   // الهدف النهائي للعد
  @Output() targetChange = new EventEmitter<number>(); // لإرسال التحديثات للعد
  counter: number = 0;             // العدد الحالي (مش محتاج Input)
  private started = false;         // علشان ما يشتغلش أكتر من مرة

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const speed = 50;

    const updateCount = () => {
      let increment: number;
      if (this.target === 0) return;
      if (this.counter === this.target) return;
      if (this.counter > this.target) return;
      if (this.counter < 0) this.counter = 0;
      if (this.target < 0) this.target = 0;
      console.log(((this.target / speed)) % 2);
      if (((this.target / speed)) % 2 == 0 ) {
        increment = Math.floor((this.target / speed));
      }else {
        increment  = 1;
      }; // لضمان ان الزيادة مش هتكون عدد صحيح
      if (this.counter < this.target) {
        this.counter += increment;
        this.targetChange.emit(this.counter);
        setTimeout(updateCount, 5);   // حدث العد كل 100 مللي ثانية
      } else {
        this.counter = this.target;
      }
    };

    // ✅ يبدأ العد لما العنصر يظهر في الشاشة
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.started) {
            this.started = true;
            updateCount();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 } // يبدأ لما 30٪ من العنصر يبقى ظاهر
    );

    observer.observe(this.el.nativeElement);
  }
}

