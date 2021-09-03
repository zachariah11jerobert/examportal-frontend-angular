import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar ) { }

  public user={
    username: '',
    password: '',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  }
  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username =='' || this.user.username==null){
      this.snack.open('Username is required!!','ok',{
        duration:3000,
      });
      return;
    }

    // addUser: userservice
    this.userService.addUser(this.user).subscribe((data)=>{
      // success
      console.log(data);
      alert('success');
    },(error)=>{
      // error
      console.log(error);
  
      this.snack.open('something went wrong!!','ok',{
        duration:3000,
      });
    })
  }

}
