import React, { Component } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import First from "../../assets/body.png";

import { Button, Breadcrumb, Progress } from "antd";

export default class breadcrupms extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#020003" }}>
        <section>
          <img src={First} style={{ width: "100%", height: "550px" }} />
        </section>
        <Progress percent={25} showInfo={false} status="active" />
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
  }
}
