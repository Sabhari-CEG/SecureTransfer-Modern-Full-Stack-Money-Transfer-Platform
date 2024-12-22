import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-history',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css'
})
export class TransactionHistoryComponent implements OnInit {
  private http : HttpClient = inject(HttpClient);
  tableData = null;
  ngOnInit() {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const userId = JSON.parse(storedData).id
      this.getTransactionLog(userId);
    }
  }

  getTransactionLog(userId : string){
    const url = `http://localhost:8080/transaction/log/${userId}`;
    this.http.get(url).subscribe({
      next: (res : any) => {
        console.log(res);
        this.tableData = res;
      }
    })
  }

}
