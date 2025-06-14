import { configureStore } from '@reduxjs/toolkit';
import templateReducer from './templateSlice';

const store = configureStore({
  reducer: {
    templates: templateReducer
  }
});

export default store;