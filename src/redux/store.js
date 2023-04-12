import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './slice';
export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});
