import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  api: string = 'http://localhost:3000';
  userInfo: any = {
    firstName: "Ahmed",
    lastName: "Magdy",
    bio: [
      "Frontend Developer.",
      "a Freelancer.", 
      "an Angular Expert."
    ]
  };

  private editSubject = new Subject<any>();
  edit$ = this.editSubject.asObservable();

  constructor(private http: HttpClient) { }

  getInfo(): Observable<any> {
    return this.http.get(`${this.api}/info`);
  }

  createInfo(info: any): Observable<any> {
    return this.http.post(`${this.api}/info`, info, { withCredentials: true });
  }

  getValue(key: string): any {
    if (key === 'bio') {
      return this.userInfo.bio.join('\n');
    }
    return this.userInfo[key] || '';
  }

  setValue(key: string, value: string) {
    if (key === 'bio') {
      this.userInfo.bio = value.split('\n').filter((item: string) => item.trim());
    } else {
      this.userInfo[key] = value;
    }
  }

  updateValue(key: string, value: string) {
    this.setValue(key, value);
  }

  openModal(data: any) {
    console.log('Opening modal with data:', data);
    this.editSubject.next(data);
  }
}