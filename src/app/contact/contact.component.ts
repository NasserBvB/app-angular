

import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = "Liste des contactes";


  contacts :any=[];
  
  constructor(private contactsService : ContactsService) {
    this.contacts = contactsService.getContacts();
  }

  ngOnInit(): void {
  }

  getTitle(){
    return this.title;
  }

}
