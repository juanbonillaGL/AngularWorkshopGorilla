import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.interfaces';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  @Output ()
  deleted = new EventEmitter<String>();



  @Input()
  contact: Contact;

  ngOnInit() {
  }

  deleteContact(event: Event,  contactId:String) : void{ 
    event.preventDefault();
    this.deleted.emit(contactId);
  }

}
