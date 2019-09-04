import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import First from "../../assets/slide-3.png";
import Second from "../../assets/slide-2.png";
import Thiord from "../../assets/carrots.jpg";
import { Button, Row, Col } from "antd";
import Tabs from "../components/tabs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentState: 0
    };
  }

  firstSection = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <section
            style={{
              width: "100%",
              height: "600px",
              backgroundImage: `url(${First})`
            }}
          >
            <div
              className="first-page container"
              style={{
                textAlign: "right",
                fontSize: "60px",
                fontWeight: "bolder",
                marginBottom: '50px'
              }}
            >
              <p> <br />FUEL UP </p>
            </div>

            <div
              className="container"
              style={{
                color: "black",
                textAlign: "right",
                fontSize: "70px",
                fontWeight: "bolder"
              }}>
              <p>
                YOUR DAY
              </p>
            </div>
            <div
              className="container"
              style={{
                color: "black",
                textAlign: "right",
                fontSize: "70px",
                fontWeight: "bolder"
              }}>
              <p>
                <br />
                <Button
                  style={{
                    background: "#6ACBDF",
                    color: "white",
                    // height: "50px",
                    width: "120px",
                    fontSize: "10px",
                    zIndex: '999',
                    border: '1px solid #6ACBDF'
                  }}
                >
                  VIEW OPTIONS
                </Button>
              </p>
            </div>
          </section>

          <Carousel.Caption>
            <h3>1</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <section
            style={{
              width: "100% ",
              height: "600px",
              backgroundSize: "cover",
              backgroundImage: `url(${Second})`
            }}
          >
            <div
              className="first-page container"
              style={{
                textAlign: "left",
                fontSize: "70px",
                fontWeight: "bolder",
              }}>
              <p><br/> <br /> FUEL UP </p>
            </div>
            <div
              className="container"
              style={{
                color: "white",
                textAlign: "left",
                fontSize: "70px",
                fontWeight: "bolder"
              }}
            >
              <p><br/> <br />YOUR DAY </p>
            </div>
          </section>

          <Carousel.Caption>
            <h3>2</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <section
            style={{
              width: "100% ",
              height: "600px",
              backgroundSize: "cover",
              backgroundImage: `url(${Thiord})`
            }}
          ></section>

          <Carousel.Caption>
            <h3>3</h3>
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };

  secondSection = () => {
    return (
      <Row>
        <Col span={12} style={{ height: "400px", backgroundColor: "black" }}>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "170px",
              color: "white"
            }}
          >
            Play video
          </p>
        </Col>

        <Col span={12} style={{ border: "1px solid black", height: "400px" }}>
          <div
            style={{
              fontFamily: "Electrolize",
              fontSize: "30px",
              textAlign: "center"
            }}
          >
            How MBF works
          </div>
          <Tabs handleStates={this.handleStates} />
        </Col>
      </Row>
    );
  };

  viewOfManualCarousel = () => {
    const value = this.state.currentState;

    // if(value === 2 ){
    //   alert('3');
    // } else if( value === 1) {
    //   alert('1')
    // } else {
    //   alert('0')
    // }
  };

  handleStates = value => {
    this.setState({ currentState: value });
  };

  render() {
    return (
      <div>
        <section> {this.firstSection()} </section>
        <section> {this.secondSection()} </section>
      </div>
    );
  }
}

export default App;
