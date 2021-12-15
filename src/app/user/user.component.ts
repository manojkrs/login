import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public route:Router,public http:HttpClient) { }
  User:Users[]=[];
  Users:Users=new Users;
  ngOnInit(): void {
  }
Add()
{
  this.User.push(this.Users)
}
}
