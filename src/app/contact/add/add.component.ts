import { Component, OnInit } from '@angular/core';
import {ContactService} from 'src/app/contact.service';
import {ActivatedRoute} from '@angular/router';
import {Contact} from 'src/app/contact';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public contactid!:string;
  public contact=new Contact('','','','','','');
  public message!:string;

  public isError:boolean=false;
  public isSuccess:boolean=false;

  isDisabled: boolean = true;
  isHidden: boolean = true;


  constructor(private _cs:ContactService,private _acroute:ActivatedRoute) { }


  ngOnInit(): void {


  }

  onSubmitForm(){
    this.contact.userid=localStorage.getItem('userid')
    console.log(this.contact);

    if(this.contact.userid){
      this._cs.addContact(this.contactid,this.contact).subscribe(response=>{
        console.log(response);
        this.message=response.message
        this.isError=false
        this.isSuccess=true

      },err=>{
        console.log(err);
        this.message=err.error.message
        this.isError=true
        this.isSuccess=false

      })
    }


  }

}
