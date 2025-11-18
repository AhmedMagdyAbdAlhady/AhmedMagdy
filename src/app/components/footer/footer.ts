import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  socialmedia= [
    {
      link: 'https://www.facebook.com/ahmed.magdy.9028194',
      icon: 'fa-brands fa-facebook',
    },
    {
      link: 'https://github.com/ahmedmagdy00',
      icon: 'fa-brands fa-github',
    },
    {
      link: 'https://www.linkedin.com/in/ahmed-magdy-566712212/',
      icon: 'fa-brands fa-linkedin',
    },
    {
      link: 'https://wa.me/+201024739223',
      icon: 'fa-brands fa-whatsapp',
    },
  ];
  links=[
    {
      title: 'Home',
      link: '#',
    },
    {
      title: 'About',
      link: '#about',
    },
    {
      title: 'Services',
      link: '#services',
    },
    {
      title: 'projects',
      link: '#projects',
    },
    {
      title: 'contact',
      link: '#contact',
    }
  ]

Services = [
       'Web Development',"Web Development","Business Strategy","Data Analysis","Graphic Design" ]




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
