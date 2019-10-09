import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Button, Layout, Menu, Row, Col, Icon } from "antd";
import { MENU_ITEMS, HEADER_BOUNCE } from "./data";
import { connect } from "react-redux";
import { BASE_URL } from "./shared/constant/url";

//Components
import { Animated } from "react-animated-css";
import { Parallax } from "react-parallax";
import { menulist } from "./actionCreators";

//Routes
import "./index.css";
import ModalSlide from "./forms/banner/index";
import Index from "module/main/index";
import Plans from "./module/plans/index";
import Size from "./module/plans/screens/second_section";
import Days from "./module/plans/screens/third_section";
import Fourth from "./module/plans/screens/fourth_section";
import Fixed from "./module/plans/screens/fixed_meals";
import Footer from "./components/footer";
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
      visible_table: false,
      selectedMenuId: 0
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

  componentWillMount() {
    this.props.menulist();
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

  width = size => {
    if (size > 1280) {
      size = "0px 200px";
    } else if (size > 2560) {
      size = "0px 500px";
    } else {
      size = "0px 0px";
    }

    return size;
  };

  header = size => {
    if (size <= 1024) {
      size = "140%";
    } else if (size > 1280) {
      size = "100.5%";
    } else {
      size = "133%";
    }

    return size;
  };

  render() {
    const screenWidth = window.screen.width;
    const menus = this.props.menus === undefined ? [] : this.props.menus;
    return (
      <Layout>
        <Layout
          style={{
            marginLeft: "0px",
            padding: this.width(screenWidth)
          }}
        >
          <Header
            style={{
              position: "fixed",
              zIndex: 999,
              width: this.header(screenWidth)
            }}
          >
            <Parallax strength={200} className="parallax-content">
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
              this.state.hover === false ? "header-menu" : " header-menu-not"
            }
          >
            <Row>
              <Col span={10} offset={2}>
                <ul
                  style={{
                    listStyle: "none",
                    opacity: 1,
                    paddingTop: "20px",
                    marginLeft: "250px",
                    opacity: 5
                  }}
                >
                  <li>
                    <h6
                      style={{
                        fontFamily: "Rajdhani, sans-serif",
                        color: "white"
                      }}
                    >
                      FIXED SETS{" "}
                    </h6>
                  </li>
                  {menus.map(item => {
                    return (
                      <li key={item.id}>
                        <a
                          href={"http://localhost:7000/#/plans/fixed"}
                          style={{
                            fontFamily: "Rajdhani, sans-serif",
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "bold"
                          }}
                          key={item.id}
                          onClick={() => {
                            this.setState({
                              hover: false,
                              selectedMenuId: item.id
                            });
                          }}
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
                <Route path="/plans/meals" exact component={Fourth} />
                <Route
                  path="/plans/fixed"
                  exact
                  component={() => (
                    <Fixed
                      {...this.props}
                      selectedMenuId={this.state.selectedMenuId}
                    />
                  )}
                />
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

const mapStateToProps = state => {
  return {
    menus: state.menu.menus
  };
};

const mapDispatchToProps = {
  menulist
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
