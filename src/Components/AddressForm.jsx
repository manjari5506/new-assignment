import React, { useState } from 'react';
import RegisteredAddress from './RegisteredAddress';
import UnregisteredAddress from './UnregisteredAddress';
import { Form, Row, Col, Select } from 'antd';
import { useSelector } from 'react-redux';

const { Option } = Select;

const AddressForm = () => {
  const [addressType, setAddressType] = useState('');
  const [addressData, setAddressData] = useState({});
 


  const handleAddressTypeChange = (value) => {
    setAddressType(value);
  };

  const handleAddressSubmit = (data) => {
    setAddressData(data)
  };


  return (
    <div className="address-form">
      <h2>Address Information</h2>
      <Form layout="vertical">
        <Row gutter={16} align="middle">
          <Col span={6}>
            <Form.Item label="Select Address Type">
              <Select
                placeholder="Select Address Type"
                onChange={handleAddressTypeChange}
                value={addressType}
              >
                <Option value="registered">Registered</Option>
                <Option value="unregistered">Unregistered</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={2}>
          </Col>
        </Row>
      </Form>
      {addressType === 'registered' && <RegisteredAddress onSubmit={handleAddressSubmit} addressType={addressType}/>}
      {addressType === 'unregistered' && <UnregisteredAddress onSubmit={handleAddressSubmit} addressType={addressType}/>}
    </div>
  );
};

export default AddressForm;

