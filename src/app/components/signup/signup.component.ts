import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  private http : HttpClient = inject(HttpClient);
  constructor(
    private router : Router
  ){}

  async signup(fname: string, lname: string, mobile: string, accNo: string, password: string) {
    const url = `http://localhost:8080/signup`;
    const params = {
      firstName: fname,
      lastName: lname,
      mobile: mobile,
      accNo: accNo,
      password: password
    };

    this.http.post(url, params).subscribe({
      next: (res: any) => {
        if (res.status === "User succesfully signed up!") {
          console.log("Signup successful");
          this.router.navigate(['/login']);
        } else if (res.status === "This mobile number is already registered!") {
          console.log("Mobile already registered");
          // Handle duplicate mobile number case
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.error('Signup failed:', error);
        // Handle error case
        this.router.navigate(['/login']);
      },
      complete: () => {
        // Optional: Handle completion
        this.router.navigate(['/login']);
      }
    });

  }
  NavigateToLogin(){
    this.router.navigate(['/login'])
  }
}
