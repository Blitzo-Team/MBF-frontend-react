import React, { Component } from "react";
import { Row, Col, Button } from "antd";

//images routes
import Muscle from "../../assets/muscleman.png";
import Weightloss from "../../assets/weightloss.jpeg";
import Balance from "../../assets/balance.jpeg";
import Gulay from "../../assets/gulay.png";
import taco from "../../assets/taco.png";
import bulkfoods from "../../assets/bulkfoods.png";
import Athlete from "../../assets/athlete.png";
import crossfit from "../../assets/crossfit.png";
import trueForm from "../../assets/true.png";
import RP from "../../assets/RP.png";

import SubscribeForm from "../forms/subscribe";

const LIST_SECOND = [
  { title: "MUSCLE GAIN", key: 1, image: Muscle },
  { title: "WEIGHT LOSS", key: 2, image: Weightloss },
  { title: "HEALTHY BALANCE", key: 3, image: Balance },
  { title: "VEGETARIAN", key: 4, image: Gulay },
  { title: "LOW CARB", key: 5, image: taco },
  { title: "BULK FOODS", key: 6, image: bulkfoods }
];

class second_section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    return (
      <div>
        <Row style={{ textAlign: "center", background: "white" }}>
          {LIST_SECOND.map(item => {
            return (
              <Col
                span={8}
                key={item.key}
                className="section-hover"
                onMouseEnter={() => this.setState({ hover: true })}
                style={{
                  // border: '1px solid black',
                  height: "400px",
                  width: "33.3%",
                  backgroundImage: `url(${item.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}>
                <p
                  style={{
                    fontWeight: "bolder",
                    fontSize: "24px",
                    marginTop: "200px",
                    color: "white"
                  }}>
                  {item.title}
                </p>

                <Button
                  style={{
                    backgroundColor: "#6ACBDF",
                    color: "white",
                    float: "right",
                    marginRight: "10px",
                    marginTop: "80px",
                    fontSize: "10px"
                  }}
                >
                  ORDER NOW
                </Button>
              </Col>
            );
          })}

          <Col span={24}>
            <img src={Athlete} style={{ width: "100%", height: "350px" }} />
          </Col>
        </Row>

        <section>
          <Row
            gutter={12}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "50px 0px 50px 100px"
            }}
          >
            <Col span={8}>
              <img src={crossfit} style={{ width: "200px", height: "50px" }} />
            </Col>
            <Col span={8}>
              <img src={trueForm} style={{ width: "200px", height: "50px" }} />
            </Col>
            <Col span={8}>
              <img src={RP} style={{ width: "200px", height: "50px" }} />
            </Col>
          </Row>
        </section>

        <section>
          <Row style={{ backgroundColor: "#6ACBDF", height: "300px" }}>
            <Col span={24}>
              <center>
                <p
                  style={{
                    marginTop: "30px",
                    fontSize: "40px",
                    fontFamily: "Open Sans",
                    color: "black"
                  }}
                >
                  Join & Subscribe to Us! <br />
                  <span
                    style={{
                      fontSize: "15px",
                      fontFamily: "Open Sans",
                      color: "black"
                    }}
                  >
                    {" "}
                    Join & receive our mailing lists for updates, events,
                    promotions and recipes.
                  </span>
                </p>
              </center>
              <center></center>
            </Col>

            <Col span={24}>
              <SubscribeForm />
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

export default second_section;

const styles = {
  border: "1px solid black",
  height: "400px"
};
