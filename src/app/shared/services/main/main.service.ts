import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  url = 'http://localhost:3000/Main';

  constructor(private http: HttpClient) { }

  usersMain() {
    return this.http.get(this.url);
  }
}
