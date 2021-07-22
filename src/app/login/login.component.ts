import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Welcome to SBL Bank"

    acno="Account Number Please"

  pswd=""

  users:any = {
    1000: { acno: 1000, username: "Aahil", password: "userone", balance: 5000 },
    1001: { acno: 1001, username: "Abhinav", password: "usertwo",  balance: 6000 },
    1002: { acno: 1002, username: "Laisha", password: "userthree",  balance: 7000 },
    1003: { acno: 1003, username: "Riddhieka", password: "userfour", balance: 8000 }
}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  

login(){

  //console.log(a)

var acno = this.acno;

console.log(acno)
var pswd = this.pswd;
console.log(pswd)

let accDetails = this.users

if(acno in accDetails){

  if(pswd == accDetails[acno]["password"]){

    alert("Login successful")
    this.router.navigateByUrl("dashboard")
  }
  else{
    alert("Invalid password")
  }
}
else{
  alert("Invalid Account Number")
}
  
}

}
