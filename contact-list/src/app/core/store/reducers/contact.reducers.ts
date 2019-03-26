import { State } from 'src/app/core/models/state.interface';
import { ContactActions, ContactsActionTypes } from 'src/app/core/store/actions/contact.actions';

export const initialState: State = {
 contacts: [],
 loading: false,
 error: false
};

export function contactsReducers (
  state: State = initialState,
  action: ContactActions
) {
  switch (action.type) {
    case ContactsActionTypes.GET_CONTACTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case ContactsActionTypes.GET_CONTACTS_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false,
        contacts: action.payload,
      };
    }
    case ContactsActionTypes.GET_CONTACTS_FAILED: {
      return {
        ...state,
        error: true,
        loading: false
      };
    }
    case ContactsActionTypes.DELETE_CONTAC: {
      return state;
    }
    default: {
      return state;
    }
  }
}


