import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts(){
    return [
      {id:"1",name:"contact1",tel:"066666", email:"email@tr.com"},
      {id:"2",name:"contact2",tel:"066666", email:"email@tr.com"},
      {id:"3",name:"contact3",tel:"066666", email:"email@tr.com"},
      {id:"4",name:"contact4",tel:"066666", email:"email@tr.com"}
    ];
  }
}
