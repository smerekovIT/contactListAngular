import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../modules/contact';
@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css']
})
export class ContactsDetailsComponent implements OnInit {
@Input() contact: Contact;
  constructor() { }

  ngOnInit() {
  }

}
