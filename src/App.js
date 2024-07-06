import React from 'react';
import CompanyForm from './Components/CompanyForm';
import AddressType from "./Components/AddressType";
import './App.css';

const App = () => {


  return (
    <div className="main-container">
      <h2>Company Information</h2>
      <CompanyForm />
      <AddressType/>
    </div>
  );
}

export default App;
