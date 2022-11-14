import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  static instances = 0;
  userValue = new BehaviorSubject(this.user);

  constructor() {
    LocalStorageService.instances++;
    console.log(
      'LocalStorageService instances:',
      LocalStorageService.instances
    );
  }

  set user(value) {
    this.userValue.next(value);
    if (value !== null) {
      localStorage.setItem('user', value);
    } else {
      localStorage.removeItem('user');
    }
  }

  get user() {
    return localStorage.getItem('user');
  }
}
