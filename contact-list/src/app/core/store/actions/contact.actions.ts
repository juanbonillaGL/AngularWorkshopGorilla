import { Contact } from 'src/app/core/models/contact.interfaces';
import { Action } from '@ngrx/store';

export enum ContactsActionTypes {
  GET_CONTACTS = '[CONTACTS] Get CONTACTS',
  GET_CONTACTS_SUCCESS = '[CONTACTS] Get CONTACTS Success',
  GET_CONTACTS_FAILED = '[CONTACTS] Get CONTACTS Failed',

  CREATE_CONTAC = '[CONTACTS] Create CONTAC',
  CREATE_CONTAC_SUCCESS = '[CONTACTS] Create CONTAC Success',
  CREATE_CONTAC_FAILED = '[CONTACTS] Create CONTAC Failed',

  DELETE_CONTAC = '[CONTACTS] Delete CONTAC',
  DELETE_CONTAC_SUCCESS = '[CONTACTS] Delete CONTAC Success',
  DELETE_CONTAC_FAILED = '[CONTACTS] Delete CONTAC Failed',
}


/**
 * Get Actions.
 */
export class GetContacts implements Action {
  readonly type = ContactsActionTypes.GET_CONTACTS;
}

export class GetContactsSuccess implements Action {
  readonly type = ContactsActionTypes.GET_CONTACTS_SUCCESS;
  constructor(public payload: Array<Contact>) {}
}

export class GetContactsFailed implements Action {
  readonly type = ContactsActionTypes.GET_CONTACTS_FAILED;
}



/**
 * Create Actions.
 */
export class CreateContact implements Action {
  readonly type = ContactsActionTypes.CREATE_CONTAC;
  constructor(public payload: Contact) {}
}

export class CreateContactSuccess implements Action {
  readonly type = ContactsActionTypes.CREATE_CONTAC_SUCCESS;
}

export class CreateContactFailed implements Action {
  readonly type = ContactsActionTypes.CREATE_CONTAC_FAILED;
}

/**
 * Delete Actions.
 */
export class DeleteContact implements Action {
  readonly type = ContactsActionTypes.DELETE_CONTAC;
  constructor(public payload: String) {}
}

export class DeleteContactSuccess implements Action {
  readonly type = ContactsActionTypes.DELETE_CONTAC_SUCCESS;
}

export class DeleteContactFailed implements Action {
  readonly type = ContactsActionTypes.DELETE_CONTAC_FAILED;
}

export type ContactActions =
  GetContacts |
  GetContactsSuccess |
  GetContactsFailed |

  CreateContact |
  CreateContactSuccess |
  CreateContactFailed |

  DeleteContact |
  DeleteContactSuccess |
  DeleteContactFailed ;
