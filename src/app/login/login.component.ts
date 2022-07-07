import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    onLogin() {
        console.log(localStorage);
        // debugger;
        localStorage.setItem('isLoggedin', 'true');
        console.log(localStorage);
        this.router.navigate(['/dashboard']);
    }
}
