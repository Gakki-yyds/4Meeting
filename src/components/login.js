import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import NormalLoginForm from './loginForm'
import RegistrationForm from './register'
import React from 'react'

const { Option } = Select;

class DrawerForm extends React.Component {
  state = { visible: false, childDrawer:false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer=()=>{
    this.setState({
      childDrawer:true
    })
    console.log(this.state.childDrawer)
  }

  onChildrenDrawerClose=()=>{
    this.setState({
      childDrawer:false
    })
  }
  //<NormalLoginForm show={this.showChildrenDrawer}/>

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showDrawer}>
          登录
        </Button>
        <Drawer
          title="用户登录"
          width={360}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <NormalLoginForm show={this.showChildrenDrawer}/>
          <Drawer
            title="用户注册"
            width={520}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={this.state.childDrawer}
          >
            <RegistrationForm/>
          </Drawer>
        </Drawer>
      </>
    );
  }
}
export default DrawerForm;