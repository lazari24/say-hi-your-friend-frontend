import './SendMessageForm.css'
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

export const SendMessageForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="form-wrapper">
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} style={{width: "400px"}}>
        <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
          <Input placeholder="I'm..."/>
        </Form.Item>
        <Form.Item name={['email']} rules={[{ type: 'email', required: true }]}>
          <Input placeholder="Email"/>
        </Form.Item>
        <Form.Item name={['user', 'introduction']} rules={[{required: true}]}>
          <Input.TextArea placeholder="Your message"/>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
          <Button type="default" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
