import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isShow=true
  public uname:any

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isShow=false
      this.uname=localStorage.getItem('username')

    }else{
      this.isShow=true
    }
  }

  onLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('userid')
    this.router.navigate(['/'])
  }

}
