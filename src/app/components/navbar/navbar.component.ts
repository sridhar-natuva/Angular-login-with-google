import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth : AuthService) { }

  ngOnInit() {
  }
//user: any;

 // loginSucess : boolean = false;

  // login() {
  //  this.user =  this.auth.googleSignin();
  //  this.loginSucess = true;
  // }

  // signout(){
  //   this.loginSucess = false;
  // }
}
