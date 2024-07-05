import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companies: {}
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    saveCompanyInfo: (state, action) => {
      const { CIN, companyName, companyType } = action.payload;
      if (!state.companies[CIN]) {
        state.companies[CIN] = {
          CIN,
          companyName,
          companyType,
          registeredAddress: {},
          unregisteredAddress: {}
        };
      }
      console.log("payload",action.payload);
    },
    addCompanyOrAddress: (state, action) => {
      const { CIN, addressType, addressData } = action.payload;
      if (state.companies[CIN]) {
        state.companies[CIN][addressType] = addressData;
      }
    },
    editAddress: (state, action) => {
      const { CIN, addressType, addressData } = action.payload;
      if (state.companies[CIN] && state.companies[CIN][addressType]) {
        state.companies[CIN][addressType] = {
          ...state.companies[CIN][addressType],
          ...addressData
        };
      }
      console.log('State after editAddress:', state.companies);
    },
    deleteAddress: (state, action) => {
      const { CIN, addressType } = action.payload;
      if (state.companies[CIN] && state.companies[CIN][addressType]) {
        delete state.companies[CIN][addressType];
      }
    }
  }
});

export const {  saveCompanyInfo, addCompanyOrAddress, editAddress, deleteAddress } = companySlice.actions;

export default companySlice.reducer;
