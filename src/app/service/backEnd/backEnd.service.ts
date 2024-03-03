import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor() { }

  public getAuthToken = () => {
    return window.localStorage.getItem('auth_token');
  };
  public setAuthHeader = (token: string | null) => {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  };

}
