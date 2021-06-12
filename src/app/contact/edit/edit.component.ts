import { Component, OnInit } from '@angular/core';
import {ContactService} from 'src/app/contact.service';
import {ActivatedRoute} from '@angular/router';
import {Contact} from 'src/app/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public contactid!:string;
  public contact=new Contact('','','','','','');
  public message!:string;

  public isError:boolean=false;
  public isSuccess:boolean=false;

  isDisabled: boolean = true;
  isHidden: boolean = true;

  fullname: string = '';
  password: string = '';
  email:string='';


  constructor(private _cs:ContactService,private _acroute:ActivatedRoute) { }


  ngOnInit(): void {
    this._acroute.params.subscribe(param=>{
      this.contactid=param.id;
    })
    console.log(this.contactid);




    this._cs.getContactbyId(this.contactid).subscribe(rs=>{
      console.log(rs);
      this.contactid=rs.contact._id;
      this.contact.name=rs.contact.name;
      this.contact.email=rs.contact.email;
      this.contact.phone=rs.contact.phone;
      this.contact.type=rs.contact.type;
      this.contact.photo=rs.contact.photo;
      this.contact.userid=rs.contact.userid;
    },err=>{
      console.log(err);
    })

  }




  onClick(event: any) {
    console.log(this.contact);
    this._cs.updateContact(this.contactid,this.contact).subscribe(rs=>{
      this.message=rs.message
      this.isError=false
      this.isSuccess=true
    },err=>{
      this.message=err.error.message
      this.isError=true
      this.isSuccess=false
    })

  }



}
