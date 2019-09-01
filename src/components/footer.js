import React, { Component } from "react";
import { Layout, Row, Col, Icon } from "antd";
import Dog from "../module/assets/cute.png";
import { FOOTER_INAGES, COMPANY_LIST, MEALS, ACCOUNT, CONTACT } from "../data";

const { Footer } = Layout;
class footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
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
                <img src={Dog} style={{ height: "50px", marginLeft: "30px" }} />
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
            float: "left",
            width: "100%",
            height: "60px"
          }}
        >
          <Col span={24}>
            <div style={{ float: "left" }}>
              Copyright © 2015 - 2019 My Body Fuel Pty Ltd. All rights reserved
              | Developed by Blitzo.
            </div>

            <div style={{ fontSize: "12px", textAlign: "right" }}>
              DISCLAIMER | PRIVACY POLICY | TERMS
            </div>
          </Col>
        </Footer>
      </div>
    );
  }
}

export default footer;
