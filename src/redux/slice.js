import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const tasksInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  reducers: {
    addContact(state, action) {
      console.log(action);
      state.contacts.push(action.payload);
    },
    deleteContact(state, { payload }) {
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== payload),
      };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);



export const { addContact, deleteContact } = contactsSlice.actions;

export const fetchContacts = state => state.contacts.contacts;
export const fetchFilter = state => state.contacts.filter;
