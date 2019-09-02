import React, { Component } from "react";
import First from "../../assets/body.png";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import MuscleForm from "../forms/days";

import { Button, Row, Col, Breadcrumb, Progress } from "antd";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentState: 0
    };
  }

  first = () => {
    return (
      <div>
        <img src={First} style={{ width: "100%", height: "550px" }} />
      </div>
    );
  };

  breadCrumps = () => {
    return (
      <div>
        <Progress percent={54} showInfo={false} status="active" />
        <Breadcrumb
          separator=""
          style={{ fontSize: "19px", marginTop: "0px", display: "inline" }}
        >
          <Breadcrumb.Item style={{ color: "#616161" }}>
            <Plus
              style={{
                width: "18px",
                float: "left",
                margin: "22px 10px 0px 30px"
              }}
            />{" "}
            &nbsp; MUSCLE GAIN
          </Breadcrumb.Item>

          <Breadcrumb.Item href="" style={{ color: "#616161", opacity: 1 }}>
            <Arrow style={{ width: "13px", marginLeft: "40px" }} /> &nbsp; YOUR
            PLAN
          </Breadcrumb.Item>

          <Breadcrumb.Item href="" style={{ color: "#616161" }}>
            <Arrow style={{ width: "13px", marginLeft: "40px" }} /> &nbsp;
            CUSTOM MEALS
          </Breadcrumb.Item>

          <Breadcrumb.Item href="" style={{ color: "#616161" }}>
            <Arrow style={{ width: "13px", marginLeft: "30px" }} /> &nbsp; ORDER
            COMPLETE
            <Arrow style={{ width: "13px", marginLeft: "30px" }} />
          </Breadcrumb.Item>
        </Breadcrumb>

        <Button type="primary" style={{ marginLeft: "50px" }}>
          PLACE ORDER
        </Button>
      </div>
    );
  };

  thirdSection = () => {
    return (
      <div style={{ color: "white", padding: "100px 30px 40px 100px" }}>
        <Row gutter={16}>
          <Col span={12}>
            {/* Initial Secition */}
            <Row gutter={24}>
              <Col
                span={7}
                style={{
                  color: "#616161",
                  height: "120px",
                  borderRight: "2px solid #6ACBDF",
                  
                }}
              >
                STAGE 4/5
              </Col>

              <Col span={17}>
                <p
                  style={{
                    fontStyle: " Open Sans",
                    color: "#616161",
                    fontSize: "20px"
                  }}
                >
                  How many days would you like meals for?
                </p>
              </Col>
            </Row>

            <Row gutter={20} style={{ marginTop: "150px" }}>
              <Col
                span={7}
                style={{
                  color: "#616161",
                  height: "120px",
                  borderRight: "2px solid #6ACBDF",
                  fontSize: '13px',
                }}
              >
                  OUR RECOMMENDATION
              </Col>

              <Col span={17}>
                <p
                  style={{
                    fontStyle: " Open Sans",
                    color: "#616161",
                    fontSize: "20px"
                  }}
                >
                  We'll have your reach your goals in no time. We recommend.
                </p>
              </Col>
            </Row>
          </Col>

          {/* Second Section */}

          <Col span={12}>
            <MuscleForm />
          </Col>
        </Row>
      </div>
    );
  };

  render() {
    return (
      <div style={{ backgroundColor: "#020003" }}>
        <section> {this.first()} </section>
        <section> {this.breadCrumps()} </section>
        <section> {this.thirdSection()} </section>
      </div>
    );
  }
}

export default App;
