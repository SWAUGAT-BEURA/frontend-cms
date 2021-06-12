import { Component, OnInit } from '@angular/core';
import {ContactService} from 'src/app/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public contactData:any[]=[];

  constructor(private _cs:ContactService) { }

  ngOnInit(): void {
    this._cs.listAllcontactsofUser().subscribe(response=>{
      this.contactData=response.contactsData;

    },err=>{
      console.log(err);

    })
  }



}
