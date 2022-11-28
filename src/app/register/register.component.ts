import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // valores de la forma  de registro
  form: any = {
    nombre: null,
    nombreUsuario: null,
    email: null,
    password: null
  };
  // estados del login
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  // vas a consumir servicio de autenticación
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { nombre, nombreUsuario, email, password } = this.form;

    this.authService.register(nombre, nombreUsuario, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
