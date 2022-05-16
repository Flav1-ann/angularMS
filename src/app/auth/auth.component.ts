import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authSatuts:boolean = false;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authSatuts = this.authService.isAuth;
  }
  onSignIn(){
    this.authService.signIn().then(() => {
      this.authSatuts = this.authService.isAuth;
      this.router.navigate(['appareils']);
    });
  }

  onSignOut(){
    this.authService.signOut();
    this.authSatuts = this.authService.isAuth;
  }

}
