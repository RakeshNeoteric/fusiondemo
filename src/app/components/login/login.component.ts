import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    userName: '',
    password: ''
   };
  
   router= inject(Router);
  
   onLogin() {
    if(this.loginObj.userName === 'admin' && this.loginObj.password === 'admin') {
      this.router.navigate(['/home']);
    // alert('Login successful!');
    }
    else {
     alert('Login failed!');
    }
  
  
   }
  
}
