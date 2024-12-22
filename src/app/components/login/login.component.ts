import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private http: HttpClient = inject(HttpClient);
  constructor(private router : Router){}

  async checkLogin(mobile : string,password : string){
    console.log(mobile,password);
    const url = `http://localhost:8080/login?mobile=${mobile}&password=${password}`;
    // const response = await fetch(url);
    // console.log(response);
    this.http.get(url).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.status === 'User found') {
          localStorage.setItem('userData', JSON.stringify(res));
          this.router.navigate(['/dashboard']);
        } else {
          console.log("Login failed");
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        console.error('Error:', error);
        this.router.navigate(['/']);
      }
    });
    
    
    this.router.navigate(['/dashboard']);
     
    
  }

  navigateToSignup(){
    this.router.navigate(['/signup'])
  }

}
