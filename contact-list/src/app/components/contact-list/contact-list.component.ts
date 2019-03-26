import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.interfaces';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/core/models/state.interface';
import { Subscription } from 'rxjs';

import { getAllContacts } from 'src/app/core/store/selectors';
import { GetContacts, DeleteContact } from 'src/app/core/store/actions/contact.actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy {
  constructor(private store: Store<State>) { }

  contacts: Array<Contact>;
  private subscription: Subscription;
  ngOnInit() {
    this.subscription = new Subscription();
    this.loadContactData();
  }
  
  onDelete(contactId:String){
    console.log(contactId);
    this.store.dispatch(new DeleteContact(contactId));
  }
  
  loadContactData(){
    this.store.dispatch(new GetContacts());
    this.subscription.add(this.store.pipe(select(getAllContacts)).subscribe(
      contacts => this.contacts = contacts
     ));
     
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
