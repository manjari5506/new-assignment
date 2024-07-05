import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './companySlice';

const store = configureStore({
  reducer: {
    company: companyReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
