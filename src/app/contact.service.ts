import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private _url="http://localhost:3000/"
  constructor(private _http: HttpClient) { }

  listAllContacts(){
    return this._http.get<{message:string,contactsData:any}>(environment.baseUrlUser);
  }
  listAllcontactsofUser(){
    return this._http.get<{message:string,contactsData:any}>(environment.baseUrlUser+"/getcontactsofUser/"+localStorage.getItem('userid'),{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)
    });
  }

  getContactbyId(id:string){
    return this._http.get<{message:string,contact:any}>(environment.baseUrlUser+'/getbyid/'+id,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)
    })
  }

  updateContact(id:string,contact:any){
    return this._http.put<{message:string}>(`${environment.baseUrlUser}/updateContact/${id}`,contact,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)
    })
  }

  addContact(id:string,contact:any){
    return this._http.post<{message:string}>(`${environment.baseUrlUser}/addContact/${id}`,contact,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)
    })
  }

  deleteContact(id:string){
    return this._http.delete<{message:string}>(`${environment.baseUrlUser}/deleteContact/${id}`,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)
    })
  }
}
