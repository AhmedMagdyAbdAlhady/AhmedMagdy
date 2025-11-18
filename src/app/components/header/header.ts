import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header{
  currentSection: string = 'home';
  private scrollTimeout: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // استخدام debounce manual بدلاً من RxJs لتجنب التعقيد
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.updateActiveSection();
    }, 10);
  }

  private updateActiveSection() {
    const sections = document.querySelectorAll('.Mainsection');
    const scrollPos = window.scrollY + 200;

    sections.forEach((section: Element) => {
      const top = section.getBoundingClientRect().top + window.scrollY;
      const bottom = top + section.clientHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < bottom && id) {
        this.currentSection = id;
      }
    });
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      this.currentSection = id; // تحديث فوري
    }
  }

  ngOnDestroy() {
    // تنظيف الـ timeout
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }
}