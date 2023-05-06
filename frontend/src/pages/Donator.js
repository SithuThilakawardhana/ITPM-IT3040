import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
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
const Donator = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleRequestorChange = (e) => {
    if (e.target.value === 'c') {
      setShowPaymentForm(true);
    } else {
      setShowPaymentForm(false);
    }

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
      <Container component="main" maxWidth="70%" height="80"  marginTop= '200px'></Container>
      <span style={{fontWeight: 'bold', display: 'flex' , justifyContent:' center', fontSize: '30px'}}>Can I be a Support?</span>
     <br/>
   
     <Form.Item
            name="Name"
            label="Name"
            value="name"
            hasFeedback
            rules={[    {      required: true,      message: 'Please enter your name',    },  ]}
          >
            <Input />
      </Form.Item>

      <Form.Item
            name="phone"
            label="Phone Number"
            value="phone"
            hasFeedback
            rules={[    {      required: true,      message: 'Please enter your Phone Number',    },  ]}
          >
            <Input />
      </Form.Item>

      <Form.Item
            name="Address"
            label="Address"
            value="address"
            hasFeedback
            rules={[    {      required: true,      message: 'Please enter your Address',    },  ]}
          >
            <Input />
      </Form.Item>

    <Form.Item name="Donate" value="donate" label="Donate">
      <Checkbox.Group>
        
          <Col span={20}>
            <Checkbox
              value="dryfood"
              style={{
                lineHeight: '32px',
              }}
            >
              Dry food
            </Checkbox>
          </Col>
          <Col span={20}>
            <Checkbox
              value="stationary"
              style={{
                lineHeight: '32px',
              }}
            >
              Stationary
            </Checkbox>
          </Col>
          <Col span={20}>
            <Checkbox
              value="money"
              style={{
                lineHeight: '32px',
              }}
            >
              Money
            </Checkbox>
          </Col>
        
      </Checkbox.Group>
    </Form.Item>

   
 <Form.Item name="Donating mode" label="Donating mode">
      <Radio.Group>
        <Radio value="a">Deliver to the Benificiary</Radio>
        <Radio value="b">Pick from Donator</Radio>
        <Radio value="c">Bank Deposit</Radio>
      </Radio.Group>
      
      {showPaymentForm && (
            <Form.Item name="payment" label="Payment">
              <Input type="number" placeholder="Enter payment amount" />
            </Form.Item>
          )}
    </Form.Item>
    
    <Form.Item
      wrapperCol={{
        span: 12,
        offset: 6,
      }}
    >
      <Space>
        <Button href='/' type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="reset">reset</Button>
      </Space>
    </Form.Item>
    <br></br>
    <br></br> <br></br> <br></br>
    <Footer />
  </Form>
   
  </div>

);
    }
export default Donator;