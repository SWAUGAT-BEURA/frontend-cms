import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _contactService:ContactService) { }
  public contactData:any[]=[]

  ngOnInit(): void {
    document.body.classList.add('bg-img');


  }

}
