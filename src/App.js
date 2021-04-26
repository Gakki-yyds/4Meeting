import './App.css'
import { Layout, Menu } from 'antd';
import {NavLink} from 'react-router-dom'

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><NavLink to="/"> 主页</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to="/vote"> 发起投票</NavLink></Menu.Item>
        <Menu.Item key="3"><NavLink to="/home">查看投票</NavLink></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <article id="article">
        <h2>随时随地，预约会议</h2>
        <hr></hr>
        <ul id="timeline">
          <li>
            <time dateTime="1924-11">Step 1</time>
            <div className="timeline-content">
              <h3>点击进行注册登录</h3>
            </div>
          </li>
          <li>
            <time dateTime="1925-11">Step 2</time>
            <div className="timeline-content">
              <h3>点击发起投票</h3>
            </div>
          </li>
          <li>
            <time dateTime="1925-11">Step 3</time>
            <div className="timeline-content">
              <h3>点击配置预约时间</h3>
            </div>
          </li>
          <li>
            <time dateTime="1925-11">Step 4</time>
            <div className="timeline-content">
              <h3>将问卷链接分享给好友</h3>
            </div>
          </li>
          <li>
            <time dateTime="1925-11">Step 5</time>
            <div className="timeline-content">
              <h3>登陆网站查看问卷结果</h3>
            </div>
          </li>
        </ul>
      </article>
    </Content>
    <Footer style={{ textAlign: 'center' }}>4Meeting ©2021 Created by 20174493@stu.neu.edu.cn</Footer>
  </Layout>
  );
}

export default App;
