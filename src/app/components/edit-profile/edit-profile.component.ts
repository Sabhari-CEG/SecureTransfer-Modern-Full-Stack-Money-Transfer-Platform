import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  imports: [NavbarComponent],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit {
  firstName = '';
  lastname = '';
  mobile = "0";
  accno = '';
  password = '';
  id = '';

  private http : HttpClient = inject(HttpClient);

  ngOnInit(): void {
    this.getInitdata();
  }

  getInitdata(){
    const storedData = localStorage.getItem('userData');
    console.log(storedData);
    if (storedData) {
      // this.firstName = JSON.parse(storedData).firstName;
      // this.lastname = JSON.parse(storedData).lastName;
      // this.mobile = JSON.parse(storedData).mobile;
      // this.accno = JSON.parse(storedData).accNo;
      // this.password = JSON.parse(storedData).password;
      this.id = JSON.parse(storedData).id;
      // console.log(this.mobile, typeof(this.mobile)); 
    }
    const url = `http://localhost:8080/profile/info/${this.id}`;
    this.http.get(url).subscribe({
      next : (res : any) => {
        this.firstName = res.firstName,
        this.lastname = res.lastname,
        this.mobile = res.mobile,
        this.accno = res.accno,
        this.password = res.password
      }
    })
    
  }

  editProfileDetails(fname : string,lname : string,mob : string,acc : string,pass : string){
    const params = {
      firstName : fname,
      lastname : lname,
      mobile : mob,
      accno : acc,
      password : pass
    }

    const url = `http://localhost:8080/profile/edit/${this.id}`;
    console.log(url);
    console.log(params);
    
    
    this.http.post(url,params).subscribe({
      next: (res : any) => {
        console.log(res); 
      },
      error: (error) => {
        console.error('Error:', error);
      }
    })
    
  }


}
