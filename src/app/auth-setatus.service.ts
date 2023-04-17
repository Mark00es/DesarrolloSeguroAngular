import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthSetatusService {

  isLoggedIn = false;

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
}
