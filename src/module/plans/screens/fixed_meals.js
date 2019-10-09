import React, { Component } from "react";
import First from "../../assets/body.png";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { menulist } from "../../../actionCreators";

class FixedMeals extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  first = () => {
    return (
      <div>
        <img src={First} style={{ width: "100%", height: "700px" }} />
      </div>
    );
  };

  second = () => {
    const id = this.props.selectedMenuId;
    const data = this.props.menus === undefined ? [] : this.props.menus;
    const findSize = data.find(x => x.id === id);

    console.log(findSize);
  };

  render() {
    if (this.props.selectedMenuId === 0) {
      return <Redirect to="/" />;
    }

    return (
      <div style={{ backgroundColor: "#020003" }}>
        <section> {this.first()} </section>
        <section style={{ padding: "50px", background: "black" }}>
          <center>
            <span
              style={{
                border: "2px solid white",
                borderRadius: "50px",
                color: "black",
                padding: "10px 13px 10px 12px",
                fontSize: "30px",
                background: " white",
                fontWeight: "bold",
                fontFamily: "serifs"
              }}
            >
              10
            </span>
            <h6 style={{ marginTop: "20px", color: "white" }}> MEALS </h6>
          </center>
        </section>
      </div>
    );
  }
}

export default FixedMeals;
