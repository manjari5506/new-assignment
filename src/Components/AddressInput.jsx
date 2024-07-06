import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Col, Row } from 'antd';

const AddressInput = ({ addressData, onSave, onDelete }) => {
    const [form] = Form.useForm();
    const [isEditMode, setIsEditMode] = useState(true);

    useEffect(() => {
        if (addressData) {
            form.setFieldsValue(addressData);
        }
    }, [addressData, form]);

    const handleSaveOrEdit = () => {
        if (isEditMode) {
            form.validateFields().then((values) => {
                onSave(values);
                setIsEditMode(false);
            });
        } else {
            setIsEditMode(true);
        }
    };

    return (
        <Form form={form} layout="vertical">
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item label="Street Address" name="streetAddress">
                        <Input placeholder="Street Address" disabled={!isEditMode} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Street Address 2" name="streetAddress2">
                        <Input placeholder="Street Address 2" disabled={!isEditMode} />
                    </Form.Item>
                </Col>
                <Button type="default" onClick={handleSaveOrEdit}>
                {isEditMode ? 'Save' : 'Edit'}
            </Button>
            <Button type="default" danger onClick={onDelete}>
                Delete
            </Button>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item label="Street Address 3" name="streetAddress3">
                        <Input placeholder="Street Address 3" disabled={!isEditMode} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Street Address 4" name="streetAddress4">
                        <Input placeholder="Street Address 4" disabled={!isEditMode} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Locality" name="locality">
                        <Input placeholder="Locality" disabled={!isEditMode} />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="District" name="district">
              <Input placeholder="District"  disabled={!isEditMode}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="City" name="city">
              <Input placeholder="City"  disabled={!isEditMode}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="State" name="state">
              <Input placeholder="State"  disabled={!isEditMode}/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Country" name="country">
              <Input placeholder="Country"  disabled={!isEditMode}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Postal Code" name="postalCode">
              <Input placeholder="Postal Code"  disabled={!isEditMode}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Office Type" name="officeType">
              <Input placeholder="Office Type"  disabled={!isEditMode}/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Active Status" name="activeStatus">
              <Input placeholder="Active Status"  disabled={!isEditMode}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Establishment Date" name="establishmentDate">
              <Input placeholder="Establishment Date"  disabled={!isEditMode}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Migration Flag" name="migrationFlag">
              <Input placeholder="Migration Flag"  disabled={!isEditMode}/>
            </Form.Item>
          </Col>
        </Row>
        </Form>
    );
};

export default AddressInput;
