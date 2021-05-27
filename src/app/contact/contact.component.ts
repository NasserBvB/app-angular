import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IContact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  title = 'Liste des contactes';
  creating: boolean = false;
  editing: boolean = false;
  formGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    tel: new FormControl(),
    email: new FormControl(),
  });

  contacts: any = [];

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.getAll();
  }

  // toggle add form
  toggleAdd(action: boolean) {
    this.creating = action;
    this.editing = false;
    this.formGroup.setValue({
      name: "",
      email: "",
      tel: "",
    });
  }

  // toggle edit form
  toggleEdit(contact: IContact) {
    this.creating = false;
    this.editing = true;
    this.formGroup.setValue({
      name: contact.name,
      email: contact.email,
      tel: contact.tel,
    });
  }

  // get all contacts
  getAll() {
    // this.contactsService.getContacts().subscribe((data: IContact[]) => {
    this.contacts = this.contactsService.getContacts();
    // });
  }

  // create contact
  create() {
    this.contactsService.createContact(this.formGroup.value).subscribe(
      (contact: IContact) => {
        console.log("Creation: ", contact);
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  // update contact
  update() {
    this.contactsService.updateContact(this.formGroup.value).subscribe(
      (contact: IContact) => {
        console.log("Modification: " , contact);
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  // Submit form
  submit() {
    if (this.creating) {
      return this.create();
    }
    return this.update();
  }

  // Delete Contact
  delete(contactId: number) {
    this.contactsService.deleteContact(contactId).subscribe(
      () => {
        console.log("Deletion: ");
      },
      (error) => {
        alert(error.message);
      }
    );
  }
}
