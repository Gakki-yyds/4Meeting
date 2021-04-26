import './App.css'
import { Layout, Menu,Descriptions,Affix,Button } from 'antd';
import {NavLink} from 'react-router-dom'
import React,{useState} from 'react'

const { Header, Content, Footer } = Layout;

class TestAPIRouter extends React.Component {
    constructor(props){
        super(props)
        this.state={apiResponse: ""}
    }

    callApi() {
        fetch("http://localhost:9000/testApi")
        .then(res=>res.text())
        .then(res=>this.setState({apiResponse: res}))
        .catch(err=>err)
    }

    componentDidMount(){
        this.callApi()
    }

    render(){
        return (
                <Layout className="layout">
                    <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
                        <Menu.Item key="1"><NavLink to="/"> 主页</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to="/vote"> 发起投票</NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink to="/home">查看投票</NavLink></Menu.Item>
                    </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <p>{this.state.apiResponse}</p>
                    </Content>    
                </Layout>
        );
    } 
}

export default TestAPIRouter;
