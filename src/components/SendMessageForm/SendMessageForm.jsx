import './SendMessageForm.css'
import {Form, Input, Button, Spin} from 'antd';
import {useState} from "react";
import {request} from "../../api/Request";
import UrlStore from "../../stores/UrlStore"


const layout = {
  labelCol: {span: 24},
  wrapperCol: {span: 24},
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
};

export const SendMessageForm = () => {
  const onFinish = (values) => {
    console.log(values)
    setIsLoading(true)
    request('/messages', 'POST', values)
      .then(({InsertedID}) => {
        console.log(InsertedID);
        setIsLoading(false)
        UrlStore.generateUrlById(InsertedID);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  };

  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="form-wrapper">
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
            style={{width: "400px"}}>
        <Form.Item name={['name']} rules={[{required: true}]} hasFeedback>
          <Input placeholder="I'm..."/>
        </Form.Item>
        <Form.Item name={['friendName']} hasFeedback rules={[{required: true}]}>
          <Input placeholder="Your friend name..."/>
        </Form.Item>
        <Form.Item name={['message']} hasFeedback rules={[{required: true}]}>
          <Input.TextArea placeholder="Your message"/>
        </Form.Item>
        <Form.Item wrapperCol={{...layout.wrapperCol, offset: 0}}>
          {isLoading ?
            <Spin size="large"/> :
            <Button type="default" htmlType="submit" size="large">
              Send message
            </Button>}
        </Form.Item>
      </Form>
    </div>
  );
}
