import React from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { saveCompanyInfo } from '../redux/companySlice';

const CompanyForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinishCompany = (values) => {
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
      <Button  htmlType="submit">Save</Button>
    </Form>
  );
};

export default CompanyForm;
