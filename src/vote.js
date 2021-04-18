import './App.css'
import { Layout, Menu,Descriptions,Affix,Button } from 'antd';
import {NavLink} from 'react-router-dom'
import {useState} from 'react'

const { Header, Content, Footer } = Layout;

function Vote() {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><NavLink to="/"> 主页</NavLink></Menu.Item>
        <Menu.Item key="2">发起投票</Menu.Item>
        <Menu.Item key="3">查看投票</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Descriptions title="投票信息" bordered>
        <Descriptions.Item label="发起人">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="发起时间">1810000000</Descriptions.Item>
        <Descriptions.Item label="参与人数">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="最优选项">empty</Descriptions.Item>
        <Descriptions.Item label="投票主题">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
    </Descriptions>
    </Content>
      <Affix offsetBottom={bottom} style={{textAlign:'center'}}>
        <Button type="primary"  onClick={() => setBottom(bottom + 10)}>
          新增问卷
        </Button>
      </Affix>
  </Layout>

  );
}

export default Vote;
