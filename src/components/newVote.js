import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio,DatePicker } from 'antd';
import RadioTimePicker from './radioV'
import '../App.css';


const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const rangeConfig = {
    rules: [
      {
        type: 'array',
        required: true,
        message: 'Please select time!',
      },
    ],
  };

  return (
    <Modal
      visible={visible}
      title="配置一个新的调查问卷"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="title"
          label="问卷主题"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="问卷描述">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">单选</Radio>
            <Radio value="private">多选</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="range-time-picker" label="时间范围" {...rangeConfig}>
          <RadioTimePicker/>
      </Form.Item>

      </Form>
    </Modal>
  );
};

const CollectionsPage = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        新增问卷
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};
export default CollectionsPage;