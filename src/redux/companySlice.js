import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: 'company',
  initialState: {
    companies: {}
  },
  reducers: {
    saveCompanyInfo: (state, action) => {
      const { CIN, companyName, companyType, address } = action.payload;

      state.companies[CIN] = {
        ...state.companies[CIN],
        CIN,
        companyName,
        companyType,
        address
      };
      console.log("payload",action.payload);
    },
    // editAddress: (state, action) => {
    //   const { CIN, addressType, addressData } = action.payload;
    //   if (state.companies[CIN] && state.companies[CIN][addressType]) {
    //     state.companies[CIN][addressType] = {
    //       ...state.companies[CIN][addressType],
    //       ...addressData
    //     };
    //   }
    // },
    // deleteAddress: (state, action) => {
    //   const { CIN, addressType } = action.payload;
    //   if (state.companies[CIN] && state.companies[CIN][addressType]) {
    //     delete state.companies[CIN][addressType];
    //   }
    // }
  }
});

export const {  saveCompanyInfo, addCompanyOrAddress, editAddress, deleteAddress } = companySlice.actions;

export default companySlice.reducer;
