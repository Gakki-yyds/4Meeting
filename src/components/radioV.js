import { Radio, Input,DatePicker, Form,  Button, Space, Checkbox} from 'antd';
import React from 'react'
import moment from 'moment'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
  
const {RangePicker} = DatePicker;
  const RadioTimePicker = () => {
    const onFinish = values => {
      console.log('Received values of form:', values);
    };
  
    function onChange(dates, dateStrings) {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    }

    return (
      <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Checkbox/>
                  <Form.Item
                    {...restField}
                    name={[name, 'last']}
                    fieldKey={[fieldKey, 'last']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                  >
                    <RangePicker
                      ranges={{
                        Today: [moment(), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                      }}
                      showTime
                      format="YYYY/MM/DD HH:mm:ss"
                      onChange={onChange}
                    />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add options
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };
  

  export default RadioTimePicker;
