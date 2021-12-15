import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router, public http:HttpClient) { }
  User:Users=new Users;
  url="http://localhost:4200/api/login";
  ngOnInit(): void {
  }
  Login() {
    //subscribe is absorvable type
    this.http.post<any>(this.url, this.User).subscribe((x) => {
      console.log(x.status);
      console.log(x.value);
      
      
      if (x.status=="success") {
        this.router.navigate(["/admin"]);
      }
      else if (x.status=="success1") {
        this.router.navigate(["/staff"]);
      }

       else {
        alert("Invalid data !!!")
      }

    });
  }

}
