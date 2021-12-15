import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public route:Router,public http:HttpClient) { }
  Admin:Users[]=[];
  Users:Users=new Users;
  ngOnInit(): void {
  }
Add(){
  this.Admin.push(this.Users)
}
}
