import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user=new User('','','');
  public isError:boolean=false;
  public isSuccess:boolean=false;
  constructor(private _userService:UserService,private _router:Router){}

  isDisabled: boolean = true;
  isHidden: boolean = true;
  message = '';
  password: string = '';
  email:string='';


  ngOnInit(): void {
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

    if(this.password.length>16 || this.password.length<6){
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
    if (this.password != '' || this.email!='') {
      this.isDisabled = false;
      this.isError=false;
      this.isSuccess=true;
    } else {
      this.message="Credentials must not be empty"
      this.isError=true;
      this.isSuccess=false;
      this.isDisabled = true;
    }
  }
  onClick(event: any) {
    this.check();
    if(this.message=='Success'){
      const loginInfo={
        email:this.email,
        password:this.password
      }
      this._userService.loginUser(loginInfo).subscribe(response=>{
        this.message=response.message;
        this.isError=false;
        this.isSuccess=true;
        localStorage.setItem('token',response.token);
        localStorage.setItem('userid',response.user.id);
        localStorage.setItem('username',response.user.name);
        this._router.navigate(['/contact/list']);

      },err=>{
        this.message=err.error.message;
        this.isError=true;
        this.isSuccess=false;
      })
    }
  }


}
