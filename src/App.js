import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Modal, Button, Layout, Menu, Row, Col, Icon } from 'antd';
import './index.css';
import Dog from './module/assets/cute.png';
import {FOOTER_INAGES, MENU_ITEMS, COMPANY_LIST, MEALS, ACCOUNT, CONTACT} from './data';

//Components
import ModalSlide from './forms/banner/index';

//Routes
import Index from "module/main/index";

const { Header, Footer, Content, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
 
  state = {
    collapsed: false,
    visible: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  
  render() {
    return (
      <Layout>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
         
          <h6 style={{color: 'white', padding: '10px'}}>{this.state.collapsed === true? "" : "Welcome Admin!"}</h6>         
          
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Main Page</span>
                </span>
              }>

              <Menu.Item key="1">
                <Icon type="pie-chart" />
                  <span onClick={()=>{ this.setState({visible: true}) }}> Slide</span>
              </Menu.Item>

              <Menu.Item key="2">
                <Icon type="desktop" />
                <span> Video</span>
              </Menu.Item>
             
              <Menu.Item key="3">
                <Icon type="pie-chart" />
                <span> Tabs</span>
              </Menu.Item>

              <Menu.Item key="4">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

      <Layout>
        <Header style={{position: 'fixed', zIndex: 99, width: '100%' }}>
        <div className="header-logo" />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px', background: 'white', paddingRight: '80px', paddingTop: '30px'}}>

            <Menu.Item style={{float: 'right'}} >
              <Button className="items-header" style={{width: '100px'}}>ITEMS</Button>
            </Menu.Item>

            <Menu.Item style={{float: 'right'}} >
              <Button style={{width: '120px', background: '#6ACBDF', color: 'white', }}>
              SIGN UP
              </Button>
            </Menu.Item>
              {
                MENU_ITEMS.map((items) => {
                  return <Menu.Item style={{float: 'right'}} key={items.key} values={items.key}>{items.title}</Menu.Item>
                })
              }
          </Menu>
        </Header>

        <Content style={{marginTop: '180px'}}>
          <HashRouter>
            <Switch>
              <Route path="/" component={Index} />
            </Switch>
          </HashRouter>
        </Content>

        <Footer style={{ background: 'white'}}>
          <Row>
           <Col span={7}>
            <div className="footer-logo" />
            <div style={{marginLeft: '40px'}}>
              {
                FOOTER_INAGES.map(item=>{
                  return  <a>
                             <img src={item.url} style={{ width: item.width, marginRight: item.margin}} key={item}/>
                          </a>
                })
              }
            </div> 
           </Col> 

           <Col span={5} style={{marginTop: '20px'}}>
              <div>
                <ul style={{listStyleType: 'none'}}>
                <h6>COMPANY</h6>
                  {
                    COMPANY_LIST.map(item=>{
                      return  <li key={item.key} >
                                <a> { item.title } </a>
                              </li>
                    })
                  }
                </ul>
              </div>
           </Col> 

           <Col span={4} style={{marginTop: '20px'}}>
              <div>
                <ul style={{listStyleType: 'none'}}>
                <h6>MEALS</h6>
                <h6 className="rotated-footer">PACKS MEALS PLANS</h6>
                  {
                    MEALS.map(item=>{
                      return  <li key={item.key} >
                                <a> { item.title } </a>
                              </li>
                    })
                  }
                </ul>

              </div>
           </Col> 

           <Col span={4} style={{marginTop: '20px'}}>
              <div>
                <ul style={{listStyleType: 'none'}}>
                <h6>ACCOUNT</h6>
                  {
                    ACCOUNT.map(item=>{
                      return  <li key={item.key} >
                                <a> { item.title } </a>
                              </li>
                    })
                  }
                </ul>
                <img src ={Dog} style={{height: '50px', marginLeft: '30px'}}/>
              </div>
           </Col> 

           <Col span={4} style={{marginTop: '20px'}}>
              <div>
                <ul style={{listStyleType: 'none'}}>
                <h6>CONTACT US</h6>
                  {
                    CONTACT.map(item=>{
                      return  <li key={item.key} >
                                <a> { item.title } </a>
                              </li>
                    })
                  }
                  <a className="icons-social"><Icon type="facebook" theme="filled" /></a>
                  <a className="icons-social"><Icon type="instagram" theme="filled" /></a>
                </ul>
               
              </div>
           </Col> 
           
          </Row>

            
        </Footer>
        <Footer style={{background: '#020003', color: '#C9C9C9', fontSize: '12px', float:'left'}}>
          <div  style={{ float:'left' }}>
            Copyright © 2015 - 2019 My Body Fuel Pty Ltd. All rights reserved | Developed by Blitzo.
          </div>
        
         <div style={{fontSize: '12px', textAlign: 'right'}}>
           DISCLAIMER | PRIVACY POLICY | TERMS
         </div>
        </Footer>     
        </Layout>     

       <ModalSlide visible={this.state.visible} handleOk={this.handleOk} handleCancel={this.handleCancel}/>
      </Layout>
    );
  }
}


export default App;
