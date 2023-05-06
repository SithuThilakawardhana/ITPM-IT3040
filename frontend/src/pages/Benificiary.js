import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Radio,
  Select,
  Space,
} from 'antd';


const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 10,
  },
};
const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

const theme = createTheme();
const Benificiary = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleRequestorChange = (e) => {
    if (e.target.value === 'c') {
      setShowPaymentForm(true);
    } else {
      setShowPaymentForm(false);
    }

  };


  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = (values) => {
    setIsSubmitting(true);
    console.log("Received values of form: ", values);
    // Submit the form data to the server or perform other actions here
    setIsSubmitting(false);
  };


  return (
    <div style={{
      backgroundImage: "url('poverty.jpg')",
      backgroundSize: 'cover',
      opacity: 0.8, // set opacity here
      minHeight: '100vh', // to cover the full screen
    }}>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          'input-number': 3,
          'checkbox-group': ['A', 'B'],
          rate: 3.5,
        }}
        style={{
          maxWidth: 2000,
        }}
      >

        <Navbar />

        <Form
          {...formItemLayout}
          style={{
            maxWidth: 2000,
            backgroundColor: 'transparent', // make the form background transparent
          }}
        >
        </Form>

        <ThemeProvider theme={theme}></ThemeProvider>
        <Container component="main" maxWidth="xs"></Container>
        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: ' center', fontSize: '30px' }}>Can I get a Support?</span>
        <br />

        <Form.Item
          name="FullName"
          label="Full Name"
          hasFeedback
          rules={[{ required: true, message: 'Please enter your Full name', }]}
        >
          <Input />
        </Form.Item> 

        <Form.Item
          name="Address"
          label="Address"
          hasFeedback
          rules={[{ required: true, message: 'Please enter your Address', }]}
        >
          <Input />
        </Form.Item>
        <div>
          <Form.Item
            name="PhoneNumber"
            label="Phone Number"
            hasFeedback
            rules={[{ required: true, message: 'Please enter your Phone Number', }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="members"
            label="Number of family members"
            hasFeedback
          >
            <Input />
          </Form.Item>
        </div>

        <div>
          <Form.Item
            name="Occupation"
            label="Householder occupation"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="monthly income"
            label="Monthly Income"
              >
                <Input />
          </Form.Item>
        

        
          <Form.Item name="requestor" label="Requesting type">
            <Radio.Group onChange={handleRequestorChange}>
              <Radio value="a">Dry food</Radio>
              <Radio value="b">Stationary</Radio>
              <Radio value="c">Money</Radio>
            </Radio.Group>
          </Form.Item>

        
        </div>  
    <Form.Item
            name="reason"
            label="Reason for requesting Donations"
          >
            <Input />
      </Form.Item>
    
    <Form.Item
      wrapperCol={{
        span: 12,
        offset: 6,
      }}
    >
      <Space>
        <Button href='/' type="primary" htmlType="submit" disabled={isSubmitting}>
          Submit
        </Button>
        <Button htmlType="reset">reset</Button>
      </Space>
    </Form.Item>
    <Footer />
  </Form>
   
  </div>

);
    }
export default Benificiary;