import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../contacts';
import { Contact } from '../modules/contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = CONTACTS;
  selectedContact: Contact;
  constructor() { }

  ngOnInit() {
  }
  showContact(contact: Contact): void {
    this.selectedContact = contact;
  }
}
