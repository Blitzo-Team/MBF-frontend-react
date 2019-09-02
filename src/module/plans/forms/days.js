import React, { Component } from "react";
import { Form, Input, Radio, Button, Col } from "antd";
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
                { required: false, message: "Please input your username!" }
              ],
            })(
              <Radio.Group size="large">
                <Col span={24} >
                    <div
                    className="radio-gender"
                    style={{
                        border: "1px solid white",
                        float: "left",
                        marginLeft: '40px'
                    }}>
                    <Radio.Button
                        value="male"
                        style={{
                        width: "150px",
                        background: "black",
                        color: "#616161",
                        border: "2px solid black",
                        }}>
                            <center>
                                <span style={{fontSize: '20px', color: 'white'}}>4 Days</span>
                                    <br/>
                                <span style={{fontSize: '15px'}}>$12 per meal</span>
                            </center>
                    </Radio.Button>
                    </div>
                
                    <div
                    className="radio-gender"
                    style={{
                        border: "1px solid white",
                        float: "left",
                        marginLeft: '40px'
                    }}>
                    <Radio.Button
                        value="male"
                        style={{
                        width: "150px",
                        background: "black",
                        color: "#616161",
                        border: "2px solid black",
                        }}>
                            <center>
                                <span style={{fontSize: '20px', color: 'white'}}>5 Days</span>
                                    <br/>
                                <span style={{fontSize: '15px'}}>$11.70 per meal</span>
                            </center>
                    </Radio.Button>
                    </div>
                </Col>
                <Col span={24} >
                    <div
                    className="radio-gender"
                    style={{
                        border: "1px solid white",
                        float: "left",
                        marginLeft: '40px',
                        marginTop: '30px'
                    }}>
                    <Radio.Button
                        value="male"
                        style={{
                        width: "150px",
                        background: "black",
                        color: "#616161",
                        border: "2px solid black",
                        }}>
                            <center>
                                <span style={{fontSize: '20px', color: 'white'}}>6 Days</span>
                                    <br/>
                                <span style={{fontSize: '15px'}}>$11 per meal</span>
                            </center>
                    </Radio.Button>
                    </div>
                
                    <div
                    className="radio-gender"
                    style={{
                        border: "1px solid white",
                        float: "left",
                        marginLeft: '40px',
                        marginTop: '30px'
                    }}>
                    <Radio.Button
                        value="male"
                        style={{
                        width: "150px",
                        background: "black",
                        color: "#616161",
                        border: "2px solid black",
                        }}>
                            <center>
                                <span style={{fontSize: '20px', color: 'white'}}>7 Days</span>
                                    <br/>
                                <span style={{fontSize: '15px'}}>$10.50 per meal</span>
                            </center>
                    </Radio.Button>
                    </div>
                </Col>
              </Radio.Group>
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("kilogram", {
              rules: [
                { required: false, message: "Please input your username!" }
              ]
            })(
              <Button 
                style={{ 
                    textAlign: 'center',
                    height: '60px',
                    width: '320px',
                    fontWeight: 'bolder',
                    fontSize: '15px',
                    margin: '50px 50px',
                    backgroundColor: '#6ACBDF'
                }}
              >
                  4 LARGER MEALS
            </Button>
            )}
          </Form.Item>

          {/* <Form.Item>
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
          </Form.Item> */}
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
