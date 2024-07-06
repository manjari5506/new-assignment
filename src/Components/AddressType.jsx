import React, { useEffect, useState } from 'react';
import { Select, Button, Collapse} from 'antd';
import { v4 as uuidv4 } from 'uuid';
import AddressInput from './AddressInput';

const { Option } = Select;
const { Panel } = Collapse;

const AddressType = () => {
  const [selectedAddressType, setSelectedAddressType] = useState(null);
  const [accordions, setAccordions] = useState([]);

  const setAddress = (values) => {
      localStorage.setItem('address', JSON.stringify(values));
    };
  
  useEffect(()=>{
    //console.log("Accordions", accordions);
    setAddress(accordions);
  },[accordions])


  const handleSelectChange = (value) => {
    setSelectedAddressType(value);
  };

  const handleSave = () => {
    if (selectedAddressType) {
        const newAccordion = {
          id: uuidv4(),
          addressType: selectedAddressType,
          address: {},
        };
        setAccordions([...accordions, newAccordion]);
      }
  };

  const handleSaveAddress = (id, address) => {
    setAccordions((prevAccordions) =>
      prevAccordions.map((accordion) =>
        accordion.id === id ? { ...accordion, address } : accordion
      )
    );
  };

  const handleDeleteAddress = (id) => {
    setAccordions((prevAccordions) => prevAccordions.filter((accordion) => accordion.id !== id));
  };

  return (
    <div>
        <h2>Address Information</h2>
      <div style={{ display: 'flex', marginBottom: 16 }}>
        <Select
          placeholder="Select address type"
          style={{ width: 200, marginRight: 16 }}
          onChange={handleSelectChange}
        >
          <Option value="Registered Address">Registered Address</Option>
          <Option value="Work Address">Work Address</Option>
          <Option value="Permanent Address">Permanent Address</Option>
          <Option value="Unregistered Address">Unregistered Address</Option>
        </Select>
        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
      <Collapse>
        {accordions.map((accordion) => (
          <Panel header={accordion.addressType} key={accordion.id}>
            <AddressInput addressData={accordion.address}
              onSave={(address) => handleSaveAddress(accordion.id, address)}
              onDelete={() => handleDeleteAddress(accordion.id)} />
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default AddressType;