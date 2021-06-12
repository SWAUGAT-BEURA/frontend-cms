import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user=new User('','','');
  public isError:boolean=false;
  public isSuccess:boolean=false;

  isDisabled: boolean = true;
  isHidden: boolean = true;
  message = '';
  fullname: string = '';
  password: string = '';
  email:string='';


  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit(): void {
  }

  onInputName(event: any) {
    this.fullname = event.target.value;
    this.isEmpty();
  }
  onInputPassword(event: any) {
    this.password = event.target.value;
    this.isEmpty();
  }

  onInputEmail(event: any) {
    this.email = event.target.value;
    this.isEmpty();
  }

  check() {
    if (this.fullname.length < 4) {
      this.message = 'Username Cannot be less than 4 letters';
      this.isHidden = false;
      this.isError=true;
      this.isSuccess=false;

    }
    else if(this.password.length>16 || this.password.length<6){
      this.message="length of password can't be more than 16 characters or less than 6 "
      this.isHidden=true;
      this.isError=true;
      this.isSuccess=false;
    }
    else {
      this.isError=false;
      this.isSuccess=true;
      this.message = 'Success';
    }
  }

  isEmpty() {
    if (this.fullname != '' && this.password != '' && this.email!='') {
      this.isDisabled = false;

      this.isError=false;
      this.isSuccess=true;
    } else {
      this.isError=true;
      this.isSuccess=false;
      this.isDisabled = true;
    }
  }

  onClick(event: any) {
    this.check();
    if(this.message=='Success'){
      this.user.email=this.email;
      this.user.fullname=this.fullname;
      this.user.password=this.password;
      this._userService.registerUser(this.user).subscribe(response=>{
        this.message=response.message;
        this.isError=false;
        this.isSuccess=true;
        this._router.navigate(['/login']);


      },err=>{
        this.message=err.error.message;
        this.isError=true;
        this.isSuccess=false;
      })
    }
  }
}
