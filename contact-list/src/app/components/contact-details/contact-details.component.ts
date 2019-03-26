import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.interfaces';
import {ContactService} from 'src/app/core/services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contactDetail: Contact;
  constructor(private route: ActivatedRoute, private contactService: ContactService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const contactId = Number(params.get('id'));
          return this.contactService
            .getContacts()
            .pipe(switchMap(contacts => contacts.filter(contact => contact.id === contactId)));
        })
      )
      .subscribe(contact => (this.contactDetail = contact));
  }

}
