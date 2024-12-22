import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send',
  imports: [NavbarComponent],
  templateUrl: './send.component.html',
  styleUrl: './send.component.css'
})
export class SendComponent {
  private http : HttpClient = inject(HttpClient);
  constructor(
    private router : Router
  ){}
  transferMoney(receiverMobileNo : string, amount : string){
    console.log(receiverMobileNo,amount);
    const storedData = localStorage.getItem('userData');
    var id = '';
    if (storedData) {
      id = JSON.parse(storedData).id;
    }
    const url = `http://localhost:8080/transaction/transfer/${id}`;
    const params = {
      receiverMobile : receiverMobileNo,
      type : "transfer",
      amount : amount
    }
    this.http.post(url,params).subscribe({
      next : (res : any) => {
        if (res.success) {
          this.router.navigate(['/dashboard']);
        }
      }
    })
    
  }

}
