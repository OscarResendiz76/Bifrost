import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://10.25.6.215:10000/swagger-ui/index.html#/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(nombreUsuario: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      nombreUsuario,
      password
    }, httpOptions);
  }

  register(nombre: string, nombreUsuario: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      nombre,
      nombreUsuario,
      email,
      password
    }, httpOptions);
  }
}
