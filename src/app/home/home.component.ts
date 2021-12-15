import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public route:Router ,public http:HttpClient) { }
  User:Users=new Users;
  update:Users=new Users;
  del:Users=new Users;
  val:any;
  ngOnInit(): void {
  }
Submit(){
  
    this.http.post<any>('http://localhost:4200/api/in',this.update).subscribe((x)=>{
      //console.log(x.val)
      if(x.status=="insert"){
        
       console.log("value insert successfully")
      // console.log(x.val)
       this.update=new Users;
      }
      else{
        console.log("insert failed! ! !")
      }
    })

    // this.router.navigate(["login"]);
  }

  //Using for delete the entire row 
  delete(){
    this.http.post<any>('http://localhost:4200/api/delete',this.del).subscribe((x)=>{
      if(x.status=="deleted"){
        this.del=new Users;
        console.log("Deleted successfully....")
      }
      else{
        console.log("The row not delete!!!!");
        
      }
    })
  }
    
}





