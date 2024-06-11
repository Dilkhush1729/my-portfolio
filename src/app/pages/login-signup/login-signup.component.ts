import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [CommonModule,FormsModule], //template driven form
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
 activeForm: 'login' | 'register'='login';
// create an object for register 
 registerObj:registerModel=new registerModel();

 // create an object for login
 loginObj:loginModel=new loginModel();
  constructor(private snackbar:MatSnackBar,private router:Router){} // import material

 toggleForm(form : 'login'|'register')
 {
  this.activeForm=form;
 }
 registerForm(){
  debugger;
  //  check local storage user existance
  const localusers=localStorage.getItem('users') // key 
  if(localusers!=null){
    const users =JSON.parse(localusers); // convert the local storage data
    users.push(this.registerObj); // push the data 
    localStorage.setItem('users',JSON.stringify(users)); // store the data
  }
  else{
    const users=[];
    users.push(this.registerObj); //push the data
     localStorage.setItem('users',JSON.stringify(users));
  }
  this.snackbar.open('User registered successfully','Close');
 }
//  isUserExist=false;
 loginForm(){
  debugger;
  const localusers=localStorage.getItem('users');
  if(localusers!=null){
    const users =JSON.parse(localusers); // convert the data
    const isUserExist= users.find((user:registerModel)=> user.email === this.loginObj.email && user.password === this.loginObj.password); // compare the data
    
    if(isUserExist!=undefined){    // conditions
      this.snackbar.open('Login Successfull','Close');
      localStorage.setItem('loggedUser',JSON.stringify(isUserExist));
      this.router.navigateByUrl('/dashboard');
      //  sessionStorage.setItem('isUserExist','true');
    }
    else{
      this.snackbar.open('Email or Password is incorrect','Close');
    }
  }
 }
}
export class  registerModel {
  name:string;
  phoneNumber:string;
  email:string;
  password: string;
  constructor(){
     this.name="";
     this.phoneNumber="";
     this.email="";
     this.password="";

  }
}

export class  loginModel {
  email:string;
  password: string;
  constructor(){
     this.email="";
     this.password="";
  }
}