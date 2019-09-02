import React, { Component } from "react";
import { Form, Input, Radio, Button } from "antd";
import Male from "../../assets/male.png";
import Female from "../../assets/female.png";
import {Link} from 'react-router-dom';

const WrapperForm = Form.create()(
  class extends Component {
    handleSubmit = () => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;

      return (
        <Form>
          <Form.Item>
            {getFieldDecorator("gender", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Radio.Group size="large">
                <div
                  className="radio-gender"
                  style={{
                    border: "1px solid white",
                    padding: "5px",
                    float: "left"
                  }}
                >
                  <img src={Male} style={{ width: "70px" }} />

                  <Radio.Button
                    
                    value="male"
                    style={{
                      marginLeft: "20px",
                      height: "58px",
                      width: "110px",
                      background: "black",
                      color: "#616161",
                      border: "2px solid black",
                      fontSize: "30px"
                    }}
                  >
                    Male
                  </Radio.Button>
                </div>
                &nbps;
                <div
                  className="radio-gender"
                  style={{
                    border: "1px solid white",
                    padding: "5px",
                    float: "left"
                  }}
                >
                  <img src={Female} style={{ width: "74px" }} />

                  <Radio.Button
                    value="female"
                    style={{
                      marginLeft: "0px",
                      height: "60px",
                      width: "110px",
                      background: "black",
                      color: "#616161",
                      border: "2px solid black",
                      fontSize: "30px"
                    }}
                  >
                    Female
                  </Radio.Button>
                </div>
              </Radio.Group>
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("kilogram", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                placeholder="0 Kg"
                style={{
                  height: "50px",
                  width: "400px",
                  marginTop: "50px",
                  marginRight: "20px",
                  borderRadius: "10px",
                  textAlign: "right",
                  fontSize: "30px"
                }}
              />
            )}
          </Form.Item>

          <Form.Item>
            <div style={{ marginTop: "50px" }}>
              <Link to={'/plans/size'}>
                <Button
                  onClick={() => {  this.handleSubmit()}}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    height: "50px",
                    borderRadius: "10px",
                    marginRight: "10px"
                  }}>
                  1-3 Days
                </Button>
              </Link>
              
              <Link to={'/plans/size'}>
                <Button
                  onClick={() => {  this.handleSubmit()}}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    height: "50px",
                    borderRadius: "10px"
                  }}>
                  4+ Days
                </Button>
              </Link>

            </div>
          </Form.Item>
        </Form>
      );
    }
  }
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <WrapperForm history={this.props.history}/>
      </div>
    );
  }
}

export default App;
