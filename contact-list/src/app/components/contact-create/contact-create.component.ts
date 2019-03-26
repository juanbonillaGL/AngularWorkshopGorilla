import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ContactService} from 'src/app/core/services/contact.service';
import { Contact } from 'src/app/core/models/contact.interfaces';
import {Router} from "@angular/router";
import { CreateContact} from 'src/app/core/store/actions/contact.actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/core/models/state.interface';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {
  contact:Contact;
  contactForm: FormGroup;
  constructor(private router: Router, private store: Store<State>) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(2)]),
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required)
    });
  }

  submitMethod(){
    this.contact = this.contactForm.value;
    this.store.dispatch(new CreateContact(this.contact));  
  }

}
