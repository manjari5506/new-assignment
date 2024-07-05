import React, { useState } from 'react';
import CompanyForm from './Components/CompanyForm';
import AddressForm from './Components/AddressForm';
import './App.css';

const App = () => {


  return (
    <div className="main-container">
      <h2>Company Information</h2>
      <CompanyForm />
      <AddressForm />
    </div>
  );
}

export default App;
