import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import {  Button, Layout, Menu, Row, Col, Icon } from "antd";
import "./index.css";
import Footer from './components/footer';
import {
  MENU_ITEMS,
  HEADER_BOUNCE
} from "./data";
import { Animated } from "react-animated-css";
import { Parallax, Background } from 'react-parallax';
//Components
import ModalSlide from "./forms/banner/index";
import { ScrollPercentage  } from 'react-scroll-percentage';
//Routes
import Index from "module/main/index";
import Plans from "./module/plans/index";
import Size from './module/plans/screens/second_section';
import Days from './module/plans/screens/third_section';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      visible: false,
      hover: false
    };
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{position: 'fixed', height: '100vh', zIndex: 99999}}
        >
          <h6 style={{ color: "white", padding: "10px" }}>
            {this.state.collapsed === true ? "" : "Welcome Admin!"}
          </h6>

          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon style={{marginTop: '10px', fontSize: '20px', float: 'left'}} type="edit" />
                  <span>PAGE EDITOR</span>
                </span>}>

              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span
                  onClick={() => {
                    this.setState({ visible: true });
                  }}>
                
                  Slide
                </span>
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

            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon style={{marginTop: '10px', fontSize: '20px', float: 'left'}} type="ordered-list" />
                  <span >PLAN MEALS</span>
                </span>}>

              <Menu.Item key="1">
              <Icon type="highlight" />
                <span
                  onClick={() => {
                    this.setState({ visible: true });
                  }}>
                
                  Breakfast
                </span>
              </Menu.Item>

              <Menu.Item key="2">
                <Icon type="highlight" />
                <span> Snacks</span>
              </Menu.Item>

              <Menu.Item key="3">
              <Icon type="highlight" />
                <span> Lunch</span>
              </Menu.Item>

              <Menu.Item key="4">
                <Icon type="highlight" />
                <span>Dinner</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout  style={
                this.state.collapsed === false ? 
                {marginLeft: '205px'} 
                  : 
                {marginLeft: '80px', marginRight: '0px', padding: '0px 20px'}}>
        
    <ScrollPercentage>
      {({ percentage, ref, entry }) => (
        <div ref={ref}>
          <Header 
          // style={{
          //     position: 'fixed', 
          //     zIndex: 99999, 
          //     width: '91.5%', 
          //     marginRight: '100px'
          //   }}
            >

          <Parallax strength={200} >
            <div className="header-logo" />

            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={
                // percentage.toPrecision(2) === ".87" ? 
                {
                  lineHeight: "64px",
                  background: "white",
                  paddingTop: "30px",
                  // transition: '2s',
                }
                //  :
                // {
                // lineHeight: "64px",
                // background: "transparent",
                // paddingTop: "30px",
               
                // }
            }>
              
              <Menu.Item style={{ float: "right" }}>
                <Button
                  style={{
                    width: "120px",
                    background: "#6ACBDF",
                    color: "white"
                  }}
                >
                  SIGN UP
                  
                </Button>
                <Button style={{ border: "1px solid white" }}>
                  <center>
                    <Icon type="shopping-cart" />
                  </center>
                </Button>
              </Menu.Item>

              {MENU_ITEMS.map(items => {
                return (
                  <Menu.Item
                    onMouseEnter={() => this.setState({ hover: false })}
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      float: "right",
                      opacity: "100%",
                      color: "#707070"
                    }}
                    key={items.key}
                    values={items.key}
                  >
                    {/* <NavLink> */}
                      {items.title}
                    {/* </NavLink> */}
                  </Menu.Item>
                );
              })}

              <Menu.Item
                style={{ float: "right" }}
                onMouseEnter={() => this.setState({ hover: true })}
              >
                ORDER NOW
              </Menu.Item>
            </Menu>
            </Parallax>
          </Header>
        </div>
      )}
    </ScrollPercentage> 

          <div className={ this.state.hover === false ? "header-menu" : "header-menu-not"}>
            <Row>
              <Col span={10}>
                <ul
                  style={{
                    listStyle: "none",
                    opacity: 1,
                    paddingTop: "50px",
                    marginLeft: "250px"
                  }}
                >
                  {HEADER_BOUNCE.map(item => {
                    return (
                      <li>
                        <a
                          href={item.url}
                          style={{ color: "white", fontSize: '16px' }}
                          onClick={() => this.setState({ hover: false })}
                        >
                          <Animated animationOut="bounce"   isVisible={false}>
                            {item.title}
                          </Animated>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Col>

              <Col span={4}>
                <Animated animationOut="bounce" isVisible={false}>
                  <ul
                    style={{
                      listStyle: "none",
                      opacity: 1,
                      paddingTop: "50px", 
                      fontSize: '16px'
                    }}
                  >
                    <li>
                      <a style={{ color: "white" }}> VEGETARIAN </a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}> LOW CARB </a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}> LUNCH PACKS </a>
                    </li>
                  </ul>
                </Animated>
              </Col>

              <Col span={4}>
                <Animated animationOut="bounce" isVisible={false}>
                  <ul
                    style={{
                      listStyle: "none",
                      opacity: 1,
                      paddingTop: "50px", 
                      fontSize: '16px'
                    }}
                  >
                    <li>
                      <a style={{ color: "white" }}> COUPLE PLANS </a>
                    </li>
                  </ul>
                </Animated>
              </Col>
            </Row>
          </div>

          <Content
            style={{ marginTop: "5px"}}
            onMouseEnter={() => {
              this.setState({ hover: false });
            }}>
            <HashRouter>
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/plans" exact component={Plans} />
                <Route path="/plans/size" exact component={Size} />
                <Route path="/plans/days" exact component={Days} />
              </Switch>
            </HashRouter>
          </Content>

         <Footer />
        </Layout>

        <ModalSlide
          visible={this.state.visible}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
        />
      </Layout>
    );
  }
}

export default App;
