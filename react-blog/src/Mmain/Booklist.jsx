import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class Homepage extends Component{
    render(){
        return(
            <Layout>
            <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                <div>111</div>
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
              <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                  ...
                  <br />
                  Really
                  <br />...<br />...<br />...<br />
                  long
                  <br />...<br />...<br />...<br />...<br />...<br />...
                  <br />...<br />...<br />...<br />...<br />...<br />...
                  <br />...<br />...<br />...<br />...<br />...<br />...
                  <br />...<br />...<br />...<br />...<br />...<br />...
                  <br />...<br />...<br />...<br />...<br />...<br />...
                  <br />...<br />...<br />...<br />...<br />...<br />...
                  <br />...<br />...<br />...<br />...<br />...<br />
                  content
                </div>
              </Content>
            </Layout>
          </Layout>
        )
    }
}
export default Homepage;
