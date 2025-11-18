import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-type',
  standalone: false,
  templateUrl: './auto-type.html',
  styleUrl: './auto-type.css',
})
export class AutoType {
ngAfterViewInit(): void {
    // ✅ الكود بعد تحميل الصفحة
    class TxtRotate {
      toRotate: string[];
      el: HTMLElement;
      loopNum: number;
      period: number;
      txt: string;
      isDeleting: boolean;

      constructor(el: HTMLElement, toRotate: string[], period: number) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = period || 2000;
        this.txt = '';
        this.isDeleting = false;
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

        setTimeout(() => this.tick(), delta);
      }
    }

    // ✅ تنفيذ الكود بعد تحميل الصفحة
    const elements = document.getElementsByClassName('txt-rotate');
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i] as HTMLElement;
      const toRotate = el.getAttribute('data-rotate');
      const period = el.getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(el, JSON.parse(toRotate), parseInt(period || '2000', 10));
      }
    }

    // ✅ إضافة CSS خاص بالتأثير
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
    document.body.appendChild(css);
  }
}

