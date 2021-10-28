import './SendMessageForm.css'
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
};

export const SendMessageForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="form-wrapper">
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} style={{width: "400px"}}>
        <Form.Item name={['name']} rules={[{ required: true }]} hasFeedback>
          <Input placeholder="I'm..."/>
        </Form.Item>
        <Form.Item name={['friendName']} hasFeedback rules={[{required: true }]}>
          <Input placeholder="Your friend name..."/>
        </Form.Item>
        <Form.Item name={['message']} hasFeedback rules={[{required: true}]}>
          <Input.TextArea placeholder="Your message"/>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
          <Button type="default" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
