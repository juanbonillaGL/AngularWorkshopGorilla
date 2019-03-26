import { Contact } from './contact.interfaces';

export interface State {
  contacts: Array<Contact>;
  loading: boolean;
  error: boolean;
}
