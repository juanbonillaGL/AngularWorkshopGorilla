import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of, combineLatest } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ContactService } from 'src/app/core/services/contact.service';
import {
  ContactsActionTypes,
  GetContacts,
  GetContactsSuccess,
  GetContactsFailed,
  CreateContact,
  CreateContactSuccess,
  CreateContactFailed,
  DeleteContact,
  DeleteContactSuccess,
  DeleteContactFailed 
} from '../actions/contact.actions';
import { Router } from '@angular/router';

@Injectable()
export class ContactEffect {

  @Effect()
  getCONTACS$ = this.actions$
    .pipe(
      ofType(ContactsActionTypes.GET_CONTACTS),
      mergeMap(() => this.contactService.getContacts()
        .pipe(
          map(data => {
            return new GetContactsSuccess(data);
          }),
          catchError(() => of(new GetContactsFailed()))
        ))
    );

    @Effect()
    createCONTAC$ = this.actions$
      .pipe(
        ofType(ContactsActionTypes.CREATE_CONTAC),
        mergeMap((action: any) => this.contactService.createContact(action.payload)),
        map(() =>  new CreateContactSuccess()),
        catchError(() => of(new CreateContactFailed()))
      );

    @Effect()
    deleteCONTAC$ = this.actions$
      .pipe(
        ofType(ContactsActionTypes.DELETE_CONTAC),
        mergeMap((action: any) => this.contactService.deleteContact(action.payload)),
        map(() => new DeleteContactSuccess()),
        catchError(() => of(new DeleteContactFailed()))
      );

      @Effect()
      deleteCONTACSuccess$ = this.actions$
        .pipe(
          ofType(ContactsActionTypes.DELETE_CONTAC_SUCCESS),
          mergeMap(() => this.contactService.getContacts()
            .pipe(
              map(data => {
                return new GetContactsSuccess(data);
              }),
              catchError(() => of(new GetContactsFailed()))
            ))
        );

    @Effect({dispatch: false})
      changeSuccess$ = this.actions$
      .pipe(
        ofType(ContactsActionTypes.CREATE_CONTAC_SUCCESS),
        tap(() => this.router.navigate(['/'])));

  constructor(
    private actions$: Actions,
    private contactService: ContactService,
    private router: Router
  ) {}
}
