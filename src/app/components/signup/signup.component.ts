import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  email:string='' ;
  password:string='';
  fname:string='';
  lname:string='';

  constructor(private router:Router , private auth:AuthService) { }

  ngOnInit(): void {
  }
  register(){
    if(this.email==''){
    alert('please enter your email');
    return;
  }

  if(this.password==''){
    alert('please enter your password');
    return;
  }
  this.auth.register(this.email, this.password);
  this.email= '';
  this.password= '';
}


}
