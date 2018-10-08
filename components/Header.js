import Link from "next/link";
import "../styles/header.css";
import React from 'react';
import { Button, Layout, Menu ,Breadcrumb,Row,Col} from "antd";
const { Header, Footer, Sider, Content } = Layout;
import {withRouter} from 'next/router'

const Myheader = withRouter((props)=>{
  console.log(props)
  const name = props.router.pathname;
  console.log(name)
  let array=['1'];
  if(name == '/'){
    array = ['1']
  }else if(name == '/List'){
    array = ['2']
  }else if(name == '/About'){
    array = ['3']
  }
  return (
  <Row>
    <Header style={{ background: '#fff',padding:'0 20px', position: 'fixed',width:'100%',zIndex:'9999'}}>
      <Col xs={6} sm={4} md={4} lg={4} xl={4}>
        <div className="logo" >
          <img src="../static/img/logo.png" alt="logo作者：闫熙" title="logo作者：闫熙"></img>
        </div>
      </Col>
      <Col xs={18} sm={20} md={20} lg={20} xl={20}>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={array}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1" ><Link href="/"><a>Home</a></Link></Menu.Item>
          <Menu.Item key="2" ><Link href="/List"><a>List</a></Link></Menu.Item>
          <Menu.Item key="3" ><Link href="/About"><a>About</a></Link></Menu.Item>
        </Menu>
      </Col>
    </Header>
  </Row>
)})

export default Myheader;
