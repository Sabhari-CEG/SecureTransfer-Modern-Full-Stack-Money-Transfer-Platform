import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { log } from 'console';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  private http : HttpClient = inject(HttpClient);
  firstName = '';
  lastName = '';
  accNo = '';
  balance = 0.0;

  constructor(
    private router : Router
  ){}

  ngOnInit() {
    
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const userId = JSON.parse(storedData).id;
      console.log(userId);
      this.fetchRefreshData(userId)
    }
  }

  fetchRefreshData(userId : string){
    const url = `http://localhost:8080/home/${userId}`;
    this.http.get(url).subscribe({
      next: (res:any) => {
        console.log(res);
        this.firstName = res.firstname,
        this.lastName = res.lastName,
        this.accNo = res.accNo,
        this.balance = res.balance
      }
    })
  }

  navigateToDeposite(){
    this.router.navigate(['/money/deposite']);
  }
  navigateToSend(){
    this.router.navigate(['/money/send']);
  }

  

}
