import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getPokemons(index) {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
