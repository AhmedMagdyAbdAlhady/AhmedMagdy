import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {

  ModelImageSrc: string | ArrayBuffer | null = null;

  api: string = 'http://localhost:3000';

  userInfo: any = {
    image1: 'my-photo/bg-1.png',
    image2: 'my-photo/photo-1.png',
    poductimge: [
      'product-1.png',
      'product-2.png',
      'product-3.png'
    ],

    dowenloadCVLink: 'https://drive.google.com/file/d/19le_OXMC7D7d4PaFuh_Qc0r0RNhyEDXk/view?usp=sharing',
    firstName: "Ahmed",
    lastName: "Magdy",

    bio: [
      "Frontend Developer.",
      "A Freelancer.",
      "An Angular Expert."
    ],

    jobTitle: "Web Developer & Front-End Developer",
    subJobTitle: "Angular & React Developer",

    summary: `🚀 Motivated and detail-oriented Front-End Developer with a strong foundation in HTML,
          CSS, JavaScript, modern frameworks like Angular. Skilled in building responsive,
          scalable, and user-friendly web applications. Passionate about performance,
          clean code, and learning.`,

    projectsCompleted: 25,
    Experience: '4+ Years',
    Phone: '0201202266876',
    Email: 'ahmedmagdyabdalhady@gmail.com',
    resume: [
      {
        date: '2014 - 2018',
        degree: 'bachelor of Agricultural Engineering',
        university: 'Mansoura University',
        description:
          "I graduated with a bachelor's degree in agricultural engineering from Mansoura University in 2018. During my studies, I developed a passion for web development and acquired skills in problem-solving, clean coding, HTML, CSS, JavaScript, Node.js, Git, GitHub, WordPress, React.js, and Next.js. I am eager to create innovative and visually appealing projects that attract users and visitors."
      },
      {
        date: '2022 - 2022',
        degree: "Web Development Challenger",
        university: 'online coures-udacty',
        description:
          "Egypt Future Work is Digital Scholarship"
      },
      {
        date: '2023 - 2023',
        degree: 'Professional Front-End Web Development',
        university: 'online coures-udacty',
        description:
          "Egypt Future Work is Digital Scholarship"
      },
      {
        date: '2024 - 2024',
        degree: "Certificate Of Completion (The Principles of Writing Clean Code)",
        university: 'online coures-maharatech',
        description:
          "Information Technology Institute (ITI)"
      },
      {
        date: '2024 - 2024',
        degree: "TypeScript Fundamentals",
        university: 'online coures-maharatech',
        description:
          "Information Technology Institute (ITI)"
      },
      {
        date: '2024 - 2024',
        degree: "React js",
        university: 'online coures-maharatech',
        description: "Information Technology Institute (ITI)"
      },
      {
        date: '2024 - 2025',
        degree: "online coures-CLS",
        university: 'Digital Egypt Pioneers Initiative - DEPI',
        description:
          "This course covers full-stack development, including front-end technologies like HTML5, CSS, JavaScript, Angular, and TypeScript. You'll learn backend development with Node.js, Express, and Docker, along with best practices in coding, documentation, and testing."
      },
    ],
    services: [
      {
        icon: 'fa-solid fa-laptop-code',
        link: '/services/web-development',
        title: 'Web Development',
        description: 'I can create a professional and attractive website for you that is tailored to your needs and goals.',
      },
      {
        icon: 'fa-solid fa-mobile-screen-button',
        link: '/services/mobile-web-development',
        title: 'Mobile  web  Development',
        description: 'I can develop a mobile application for you that is compatible with different operating systems (Android and iOS).',
      },
      {
        icon: 'fa-solid fa-database',
        link: '/services/webdesign',
        title: 'web design',
        description: 'I can help you design and implement a robust and scalable database for your application.',
      },
      {
        icon: 'fa-solid fa-server',
        link: '/services/backend-development',
        title: 'Backend Development',
        description: 'I can build a powerful and secure backend for your web or mobile application.',
      },
      {
        icon: 'fa-solid fa-cloud',
        link: '/services/cloud-deployment',
        title: 'Cloud Deployment',
        description: 'I can deploy your applications to cloud platforms like AWS, Azure, or Google Cloud.',
      },
      {
        icon: 'fa-solid fa-bug',
        link: '/services/debugging-optimization',
        title: 'Debugging & Optimization',
        description: 'I can help you identify and fix bugs in your existing code and optimize its performance.',
      },
    ],
    projects: [
      {
        col: 4,
        img: "project-2.png",
        link: "/project-2",
        title: "Web Design",
        description: "Branding & Illustration Design",
      },
      {
        col: 8,
        img: "project-3.png",
        link: "/project-3",
        title: "Web Design",
        description: "Branding & Illustration Design",
      },
      {
        col: 8,
        img: "project-4.png",
        link: "/project-4",
        title: "Web Design",
        description: "Branding & Illustration Design",
      },
      {
        col: 4,
        img: "project-5.jpg",
        link: "/project-5",
        title: "Web Design",
        description: "Branding & Illustration Design",
      },
      {
        col: 8,
        img: "image_1.jpg",
        link: "/project-7",
        title: "Web Design",
        description: "Branding & Illustration Design",
      },
      {
        col: 4,
        img: "project-6.png",
        link: "/project-6",
        title: "Web Design",
        description: "Branding & Illustration Design",
      },

    ],
    achievement: [
      // {
      //   title: 'Awards',
      //   count: 50,
      // },
      // {
      //   title: 'Complete Projects',
      //   count: 1200,
      // },
      // {
      //   title: "Happy Customers",
      //   count: 1200,
      // },
      // {
      //   title: "Certifications ",
      //   count: 50,
      // },
    ],
    contact: [
      {
        title: 'Address',
        description: 'mit ghamer - almansoura - egypt',
        icon: 'fa-solid fa-signs-post'
      },
      {
        title: 'Phone',
        description: '+20 120 226 6876',
        icon: 'fa-solid fa-phone'
      },
      {
        title: 'Email',
        description: 'AhmedMagdyAbdalhady@gmail.com',
        icon: 'fa-solid fa-envelope'
      },
      {
        title: 'Website',
        description: 'https://AhmedMagdy.vercel.app',
        icon: 'fa-solid fa-globe'
      },

    ]

  };

  private userInfoSubject = new BehaviorSubject<any>(this.userInfo);
  userInfo$ = this.userInfoSubject.asObservable();

  private bioSubject = new BehaviorSubject<string[]>(this.userInfo.bio);
  bio$ = this.bioSubject.asObservable();

  private editSubject = new Subject<any>();
  edit$ = this.editSubject.asObservable();

  constructor(private http: HttpClient) { }

  //============ API ============//
  getInfo(): Observable<any> {
    return this.http.get(`${this.api}/info`);
  }

  createInfo(info: any): Observable<any> {
    return this.http.post(`${this.api}/info`, info, { withCredentials: true });
  }

  //============ Get Value ============//
  getValue(key: string): any {
    if (key === 'bio') return this.userInfo.bio.join('\n');
    return this.userInfo[key] || '';
  }

  //============ Set Value (General text values) ============//
  setValue(key: string, value: any) {

    if (key === 'bio') {
      const newBio = value.filter((item: string) => item.trim());
      this.bioSubject.next(newBio);
      this.userInfo.bio = newBio;
      return;
    }

    this.userInfo[key] = value;
    this.userInfoSubject.next({ ...this.userInfo });
  }

  //============ Update Value Wrapper ============//
  updateValue(key: string, value: any) {

    // لو المفتاح لصورة
    if (key.includes('image') || key.includes('product')) {
      if (this.ModelImageSrc) {
        this.saveImageLocal(key, this.ModelImageSrc as string);
      }
      return this.setValue(key, localStorage.getItem(key));
    }

    this.setValue(key, value);
    console.log(`Updated ${key}:`, value);
  }

  //============ Open modal ============//
  openModal(data: any) {
    this.editSubject.next(data);

  }

  //============ File Selection ============//
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      if (file.type.match(/image\/*/)) {
        const reader = new FileReader();

        reader.onload = () => {
          const base64 = reader.result as string;

          this.ModelImageSrc = base64;

          // حفظ في localStorage + userInfo + BehaviorSubject
          // this.saveImageLocal(key, base64);
        };

        reader.readAsDataURL(file);
      } else {
        console.log('Only images are supported.');
      }
    }
  }

  //============ Save Image (LocalStorage + userInfo) ============//
  saveImageLocal(key: string, base64: string) {

    console.log('Saving image:', key);

    // حفظ في localStorage
    localStorage.setItem(key, base64);

    // تحديث userInfo
    this.userInfo[key] = base64;

    // إشعار المشتركين
    this.userInfoSubject.next({ ...this.userInfo });
  }
}
