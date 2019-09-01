import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Popover, Button, Layout, Menu, Row, Col, Icon } from "antd";
import "./index.css";
import Dog from "./module/assets/cute.png";
import {
  FOOTER_INAGES,
  MENU_ITEMS,
  COMPANY_LIST,
  MEALS,
  ACCOUNT,
  CONTACT,
  HEADER_BOUNCE
} from "./data";
import { Animated } from "react-animated-css";

//Components
import ModalSlide from "./forms/banner/index";

//Routes
import Index from "module/main/index";
import Plans from "./module/plans/index";

const { Header, Footer, Content, Sider } = Layout;
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
        >
          <h6 style={{ color: "white", padding: "10px" }}>
            {this.state.collapsed === true ? "" : "Welcome Admin!"}
          </h6>

          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Main Page</span>
                </span>
              }
            >
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span
                  onClick={() => {
                    this.setState({ visible: true });
                  }}
                >
                  {" "}
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
          </Menu>
        </Sider>

        <Layout className="container">
          <Header className="container">
            <div className="header-logo" />
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{
                lineHeight: "64px",
                background: "white",
                paddingTop: "30px"
              }}
            >
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
          </Header>

          <div
            className={
              this.state.hover === false ? "header-menu" : "header-menu-not"
            }
          >
            <Row>
              <Col span={11}>
                <ul
                  style={{
                    listStyle: "none",
                    opacity: 1,
                    paddingTop: "50px",
                    marginLeft: "330px"
                  }}
                >
                  {HEADER_BOUNCE.map(item => {
                    return (
                      <li>
                        <a
                          href={item.url}
                          style={{ color: "white" }}
                          onClick={() => this.setState({ hover: false })}
                        >
                          <Animated animationOut="bounce" isVisible={false}>
                            {item.title}
                          </Animated>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Col>

              <Col span={3}>
                <Animated animationOut="bounce" isVisible={false}>
                  <ul
                    style={{
                      listStyle: "none",
                      opacity: 1,
                      paddingTop: "50px"
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

              <Col span={3}>
                <Animated animationOut="bounce" isVisible={false}>
                  <ul
                    style={{
                      listStyle: "none",
                      opacity: 1,
                      paddingTop: "50px"
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
            style={{ marginTop: "5px" }}
            onMouseEnter={() => {
              this.setState({ hover: false });
            }}
          >
            <HashRouter>
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/plans" exact component={Plans} />
              </Switch>
            </HashRouter>
          </Content>

          <Footer style={{ background: "white", marginTop: "20px" }}>
            <Row>
              <Col span={7}>
                <div className="footer-logo" />
                <div style={{ marginLeft: "5px" }}>
                  {FOOTER_INAGES.map(item => {
                    return (
                      <a>
                        <img
                          src={item.url}
                          style={{
                            width: item.width,
                            marginRight: item.margin
                          }}
                          key={item}
                        />
                      </a>
                    );
                  })}
                </div>
              </Col>

              <Col span={5} style={{ marginTop: "20px" }}>
                <div>
                  <ul style={{ listStyleType: "none" }}>
                    <h6>COMPANY</h6>
                    {COMPANY_LIST.map(item => {
                      return (
                        <li key={item.key}>
                          <a> {item.title} </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Col>

              <Col span={4} style={{ marginTop: "20px" }}>
                <div>
                  <ul style={{ listStyleType: "none" }}>
                    <h6>MEALS</h6>
                    <h6 className="rotated-footer">PACKS MEALS PLANS</h6>
                    {MEALS.map(item => {
                      return (
                        <li key={item.key}>
                          <a> {item.title} </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Col>

              <Col span={4} style={{ marginTop: "20px" }}>
                <div>
                  <ul style={{ listStyleType: "none" }}>
                    <h6>ACCOUNT</h6>
                    {ACCOUNT.map(item => {
                      return (
                        <li key={item.key}>
                          <a> {item.title} </a>
                        </li>
                      );
                    })}
                  </ul>
                  <img
                    src={Dog}
                    style={{ height: "50px", marginLeft: "30px" }}
                  />
                </div>
              </Col>

              <Col span={4} style={{ marginTop: "20px" }}>
                <div>
                  <ul style={{ listStyleType: "none" }}>
                    <h6>CONTACT US</h6>
                    {CONTACT.map(item => {
                      return (
                        <li key={item.key}>
                          <a> {item.title} </a>
                        </li>
                      );
                    })}
                    <a className="icons-social">
                      <Icon type="facebook" theme="filled" />
                    </a>
                    <a className="icons-social">
                      <Icon type="instagram" theme="filled" />
                    </a>
                  </ul>
                </div>
              </Col>
            </Row>
          </Footer>
          <Footer
            style={{
              background: "#020003",
              color: "#C9C9C9",
              fontSize: "12px",
              float: "left"
            }}
          >
            <div style={{ float: "left" }}>
              Copyright © 2015 - 2019 My Body Fuel Pty Ltd. All rights reserved
              | Developed by Blitzo.
            </div>

            <div style={{ fontSize: "12px", textAlign: "right" }}>
              DISCLAIMER | PRIVACY POLICY | TERMS
            </div>
          </Footer>
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
