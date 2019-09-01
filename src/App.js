import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Button, Layout, Menu, Row, Col, Icon } from "antd";
import "./index.css";
import Footer from "./components/footer";
import { MENU_ITEMS, HEADER_BOUNCE } from "./data";
import { Animated } from "react-animated-css";

//Components
import ModalSlide from "./forms/banner/index";

//Routes
import Index from "module/main/index";
import Plans from "./module/plans/index";

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
                          style={{ color: "white", fontSize: "16px" }}
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

              <Col span={4}>
                <Animated animationOut="bounce" isVisible={false}>
                  <ul
                    style={{
                      listStyle: "none",
                      opacity: 1,
                      paddingTop: "50px",
                      fontSize: "16px"
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
                      fontSize: "16px"
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
