import React, { useEffect, useState } from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { saveCompanyInfo } from '../redux/companySlice';

const CompanyForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [companyData, setCompanyData] = useState({});
  const [companyAddress, setCompanyAddress] = useState([])

  const getCompanyAddress = (key) => {
    let data = localStorage.getItem(key);
    return JSON.parse(data);
  };

  const onFinishCompany = (values) => {
    const addressArray = getCompanyAddress("address");
    setCompanyAddress(addressArray);
    values.address = addressArray;
    setCompanyData(values);
    dispatch(saveCompanyInfo(values));
  };


  return (
    <Form form={form} layout="vertical" onFinish={onFinishCompany}>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="CIN"
            label={<span>CIN (company identification number)</span>}
            rules={[{ required: true, message: 'CIN is required' }]}
          >
            <Input placeholder="CIN" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="companyName"
            label={<span>Company Name <span ></span></span>}
            rules={[{ required: true, message: 'Company Name is required' }]}
          >
            <Input placeholder="Company Name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="companyType" label="Company Type">
            <Input placeholder="Company Type" />
          </Form.Item>
        </Col>
      </Row>
      <Button  type="primary" htmlType="submit">Save</Button>
    </Form>
  );
};

export default CompanyForm;
