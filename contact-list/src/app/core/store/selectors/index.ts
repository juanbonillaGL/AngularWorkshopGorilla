import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../../models/state.interface';

export const getContactState = createFeatureSelector<State>('contacts');

export const getAllContacts = createSelector(
  getContactState,
  contactsState => {
    console.log(contactsState);
    return contactsState.contacts}
);

export const getContactById = createSelector(
  getContactState,
  (contactsState, contactID) =>
  contactsState.contact.find(contact => contact._id === contactID));

