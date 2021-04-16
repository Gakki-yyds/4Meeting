import './App.css'
import { Layout, Menu } from 'antd';


const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">主页</Menu.Item>
        <Menu.Item key="2">发起投票</Menu.Item>
        <Menu.Item key="3">查看投票</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>4Meeting ©2021 Created by 20174493@stu.neu.edu.cn</Footer>
  </Layout>
  );
}

export default App;
