import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from '../models/contact.model';
const APi = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}
  getContacts() {
     return this.http.get<IContact[]>('/contacts');
    // return [
    //   {id:1,name:"contact1",tel:"066666", email:"email@tr.com"},
    //   {id:2,name:"contact2",tel:"066666", email:"email@tr.com"},
    //   {id:3,name:"contact3",tel:"066666", email:"email@tr.com"},
    //   {id:4,name:"contact4",tel:"066666", email:"email@tr.com"}
    // ]
  }

  getOneContact(contactId: number) {
    return this.http.get<IContact>(`${APi}/contacts${contactId}`);
  }

  createContact(contact: IContact) {
    return this.http.post<IContact>(`${APi}/contacts`, contact);
  }

  updateContact(contact: IContact) {
    return this.http.put<IContact>(`${APi}/contacts/${contact.id}`, contact,{"headers": {
      "content-type": "application/json"
    }});
  }

  deleteContact(contactId: number) {
    return this.http.delete(`${APi}/contacts/${contactId}`);
  }
}
