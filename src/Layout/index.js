import React from 'react'
import logo from '../logo.svg';
import {
    Link,
    BrowserRouter as Router,
    Route,
    Switch,
  
  } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import './index.css'
import About from '../About'
import Users from '../Users'
import Home from '../Home'

const { Header, Content, Footer } = Layout;
export default function BasicLayout(){
    return(
        <Layout>
        <Router>
            <Header className="main-header">
                <div className="logo">
                    <img src={logo}/>
                </div>
               
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
                    <Menu.Item key="3"> <Link to="/users">Users</Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
          </Content>
          </Router>

          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}
