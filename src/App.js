import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Button, Layout, Menu, Row, Col, Icon } from "antd";
import "./index.css";
import Footer from "./components/footer";
import { MENU_ITEMS, HEADER_BOUNCE } from "./data";

//Components
import { Animated } from "react-animated-css";
import { Parallax } from "react-parallax";

//Routes
import ModalSlide from "./forms/banner/index";
import Index from "module/main/index";
import Plans from "./module/plans/index";
import Size from "./module/plans/screens/second_section";
import Days from "./module/plans/screens/third_section";

//Components Antd
import BreakfastTable from "./admin/plan_meals/screens/breakfast";
import BreakfastDrawer from "./admin/plan_meals/forms/breakfast_form";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      visible: false,
      hover: false,
      theposition: 0,
      visible_drawer: false,
      visible_table: false
    };
  }

  onClose = () => {
    this.setState({
      visible_drawer: false
    });
  };

  onClosetable = () => {
    this.setState({
      visible_table: false
    });
  };

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

  componentDidUpdate(props, state) {
    const scrollPosition = window.pageYOffset;
    if (state.scroll !== scrollPosition) {
      this.setState({ scroll: scrollPosition });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      theposition: scrolled
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ position: "fixed", height: "100vh", zIndex: 99999 }}
        >
          <h6 style={{ color: "white", padding: "10px" }}>
            {this.state.collapsed === true ? "" : "Welcome Admin!"}
          </h6>

          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon
                    style={{
                      marginTop: "10px",
                      fontSize: "20px",
                      float: "left"
                    }}
                    type="edit"
                  />
                  <span>PAGE EDITOR</span>
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

            {/* Plan meal */}
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon
                    style={{
                      marginTop: "10px",
                      fontSize: "20px",
                      float: "left"
                    }}
                    type="ordered-list"
                  />
                  <span>PLAN MEALS</span>
                </span>
              }
            >
              {/* Breakfast */}

              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon
                      style={{
                        marginTop: "10px",
                        fontSize: "20px",
                        float: "left"
                      }}
                      type="clock-circle"
                    />
                    <span>Breakfast</span>
                  </span>
                }
              >
                <Menu.Item
                  key="9"
                  onClick={() => {
                    this.setState({ visible_drawer: true });
                  }}
                >
                  <span>Add Meals</span>
                </Menu.Item>

                <Menu.Item
                  key="8"
                  onClick={() => {
                    this.setState({ visible_table: true });
                  }}
                >
                  <span>Fixed Meals</span>
                </Menu.Item>
              </SubMenu>

              {/* end breakfast */}

              {/* Snakcs */}
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon
                      style={{
                        marginTop: "10px",
                        fontSize: "20px",
                        float: "left"
                      }}
                      type="experiment"
                    />
                    <span>Snacks</span>
                  </span>
                }
              >
                <Menu.Item
                  key="10"
                  onClick={() => {
                    this.setState({ visible_drawer: true });
                  }}
                >
                  <span>Add Meals</span>
                </Menu.Item>

                <Menu.Item
                  key="11"
                  onClick={() => {
                    this.setState({ visible_drawer: true });
                  }}
                >
                  <span>Fixed Meals</span>
                </Menu.Item>
              </SubMenu>
              {/* End snacks */}

              {/* Lunch */}
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <Icon
                      style={{
                        marginTop: "10px",
                        fontSize: "20px",
                        float: "left"
                      }}
                      type="bell"
                    />
                    <span>Lunch</span>
                  </span>
                }
              >
                <Menu.Item
                  key="13"
                  onClick={() => {
                    this.setState({ visible_drawer: true });
                  }}
                >
                  <span>Add Meals</span>
                </Menu.Item>

                <Menu.Item
                  key="14"
                  onClick={() => {
                    this.setState({ visible_drawer: true });
                  }}
                >
                  <span>Fixed Meals</span>
                </Menu.Item>
              </SubMenu>
              {/* End Lunch */}

              {/* Dinner */}
              <SubMenu
                key="sub6"
                title={
                  <span>
                    <Icon
                      style={{
                        marginTop: "10px",
                        fontSize: "20px",
                        float: "left"
                      }}
                      type="book"
                    />
                    <span>Dinner</span>
                  </span>
                }
              >
                <Menu.Item
                  key="15"
                  onClick={() => {
                    this.setState({ visible_drawer: true });
                  }}
                >
                  <span>Add Meals</span>
                </Menu.Item>

                <Menu.Item
                  key="16"
                  onClick={() => {
                    this.setState({ visible_drawer: true });
                  }}
                >
                  <span>Fixed Meals</span>
                </Menu.Item>
              </SubMenu>
              {/* End Dinner */}
              {/* end plan meals */}
            </SubMenu>
          </Menu>
        </Sider>

        <Layout
          style={
            this.state.collapsed === false
              ? { marginLeft: "205px", padding: "0px 100px" }
              : { marginLeft: "80px", padding: "0px 100px" }
          }
        >
          <Header
            style={
              this.state.collapsed == true
                ? {
                    position: "absolute",
                    zIndex: 999,
                    width: "131vh"
                  }
                : {
                    position: "absolute",
                    zIndex: 999,
                    width: "118vh"
                  }
            }
          >
            <Parallax strength={200}>
              <div className="header-logo" />

              <Menu
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                style={
                  this.state.scroll !== 0
                    ? {
                        lineHeight: "64px",
                        background: "white",
                        paddingTop: "30px",
                        fontWeight: "bolder"
                        // transition: '2s',
                      }
                    : {
                        fontWeight: "bolder",
                        lineHeight: "64px",
                        background: "transparent",
                        paddingTop: "30px",
                        borderBottom: "1px solid transparent"
                      }
                }
              >
                <Menu.Item style={{ float: "right" }}>
                  <a
                    style={{ color: "black", border: "1px solid transparent" }}
                  >
                    <Icon
                      style={{
                        marginTop: "20px",
                        float: "right",
                        fontSize: "20px"
                      }}
                      type="shopping-cart"
                    />
                  </a>
                </Menu.Item>

                <Menu.Item style={{ float: "right" }}>
                  <Button
                    style={{
                      width: "120px",
                      background: "#6ACBDF",
                      color: "white",
                      border: "1px solid #6ACBDF"
                    }}
                  >
                    SIGN UP
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
                      <a>{items.title}</a>
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

          <div
            className={
              this.state.hover === false ? " header-menu" : " header-menu-not"
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
            style={{
              marginTop: "0px",
              zIndex: 99,
              borderTop: "28px solid #6acbdf"
            }}
            onMouseEnter={() => {
              this.setState({ hover: false });
            }}
          >
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

        <BreakfastDrawer
          visible={this.state.visible_drawer}
          onClose={this.onClose}
        />

        <BreakfastTable
          visible={this.state.visible_table}
          onClose={this.onClosetable}
          collapsed={this.state.collapsed}
        />
      </Layout>
    );
  }
}

export default App;
