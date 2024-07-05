import React, { useState } from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addCompanyOrAddress ,  editAddress, deleteAddress} from '../redux/companySlice';

const RegisteredAddress = ({ CIN, onSubmit , addressType }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinishAddress = (values) => {
    const addressData = {
      ...values
    };
    console.log("registered address",addressData,addressType)
    dispatch(addCompanyOrAddress({
      addressType: 'registeredAddress',
      ...addressData,
    }));
    onSubmit(addressData);
    //form.resetFields();
  };
  const handleDelete = () => {
    dispatch(deleteAddress({
      CIN,
      addressType,
    }));
    form.resetFields();
  };

  return (
    <div className="registered-address">
      <h3>Registered Address</h3>
      <Form form={form} layout="vertical" onFinish={onFinishAddress}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Street Address" name="streetAddress">
              <Input placeholder="Street Address" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Street Address 2" name="streetAddress2">
              <Input placeholder="Street Address 2" />
            </Form.Item>
          </Col>
          <Col span={8} className="button-container">
            <Button type="default">Edit</Button>
            <Button type="default" danger   onClick={handleDelete}>Delete</Button>
          </Col>
        </Row>
        <Row gutter={16}>
      <Col span={8}>
        <Form.Item label="Street Address 3">
          <Input placeholder="Street Address 3" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="Street Address 4">
          <Input placeholder="Street Address 4" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="Locality">
          <Input placeholder="Locality" />
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={8}>
        <Form.Item label="District">
          <Input placeholder="District" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="City">
          <Input placeholder="City" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="State">
          <Input placeholder="State" />
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={8}>
        <Form.Item label="Country">
          <Input placeholder="Country" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="Postal Code">
          <Input placeholder="Postal Code" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="Office Type">
          <Input placeholder="Office Type" />
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={8}>
        <Form.Item label="Active Status">
          <Input placeholder="Active Status" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="Establishment Date">
          <Input placeholder="Establishment Date" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="Migration Flag">
          <Input placeholder="Migration Flag" />
        </Form.Item>
      </Col>
    </Row>
    <Button htmlType="submit">Add</Button>
      </Form>
    </div>
  );
};

export default RegisteredAddress;
