import { Component } from '@angular/core';
import { Service } from './../../server/service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auto-type',
  standalone: false,
  templateUrl: './auto-type.html',
  styleUrl: './auto-type.css',
})
export class AutoType { 

  private rotateInstance: any;
  private sub!: Subscription;

  constructor(public Service: Service) {}

  ngAfterViewInit(): void {

    // ⬅⬅ أول خطوة: نسمع لأي تغيير في bio
    this.sub = this.Service.bio$.subscribe(bio => {
      this.startTyping(bio);
    });

    // ⬅⬅ إضافة CSS
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
    document.body.appendChild(css);
  }

  startTyping(textArray: string[]) {
    const elements = document.getElementsByClassName('txt-rotate');

    // ⛔ ايقاف التأثير القديم قبل تشغيل الجديد
    if (this.rotateInstance && this.rotateInstance.stop) {
      this.rotateInstance.stop();
    }

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i] as HTMLElement;
      const period = parseInt(el.getAttribute('data-period') || '2000', 10);

      this.rotateInstance = new TxtRotate(el, textArray, period);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}


/* ==========================================
   🔥 TxtRotate Class (يدعم stop())
   ========================================== */
class TxtRotate {
  toRotate: string[];
  el: HTMLElement;
  loopNum = 0;
  period: number;
  txt = '';
  isDeleting = false;
  timeoutId: any;

  constructor(el: HTMLElement, toRotate: string[], period: number) {
    this.toRotate = toRotate;
    this.el = el;
    this.period = period;
    this.tick();
  }

  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = `<span class="text-orange wrap">${this.txt}</span>`;

    let delta = 200 - Math.random() * 100;
    if (this.isDeleting) delta /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 200;
    }

    this.timeoutId = setTimeout(() => this.tick(), delta);
  }

  stop() {
    clearTimeout(this.timeoutId);
  }
}
