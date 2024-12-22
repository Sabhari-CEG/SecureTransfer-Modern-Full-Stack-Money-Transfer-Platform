import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposite',
  imports: [NavbarComponent],
  templateUrl: './deposite.component.html',
  styleUrl: './deposite.component.css'
})
export class DepositeComponent {

  private http : HttpClient = inject(HttpClient);
  constructor(
    private router : Router
  ){}

  depositeMoney(amount : string){
    const storedData = localStorage.getItem('userData')
    var userid = '';
    if (storedData) {
      userid = JSON.parse(storedData).id;
    }
    const url = `http://localhost:8080/transaction/credit/${userid}`;
    const params = {
      type : "credit",
      amount: amount
    }
    this.http.post(url,params).subscribe({
      next:(res : any) => {
        if (res.success) {
          console.log("Deposited");
          this.router.navigate(['/dashboard'])
        }
      }
    })
    
  }
}
