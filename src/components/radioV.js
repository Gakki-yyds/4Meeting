import { Radio, Input,DatePicker } from 'antd';
import React from 'react'

const {RangePicker} = DatePicker;
class RadioTimePicker extends React.Component {
    state = {
      value: 1,
    };
  
    onChange = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
    };
  
    render() {
      const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };
      const { value } = this.state;
      return (
        <Radio.Group onChange={this.onChange} value={value}>
            <Radio style={radioStyle} value={1}>
              <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Radio>
            <Radio style={radioStyle} value={2}>
              <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Radio>
            <Radio style={radioStyle} value={3}>
              <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Radio>
        </Radio.Group>
      );
    }
  }

  export default RadioTimePicker;