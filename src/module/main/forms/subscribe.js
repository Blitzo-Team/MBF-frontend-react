import React, { Component } from "react";
import { Form, Input, Icon, Button } from "antd";

const WrapperForm = Form.create()(
  class extends Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;

      return (
        <Form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Form.Item>
            {getFieldDecorator("title-1", {
              rules: [
                { required: false, message: "Please input your username!" }
              ]
            })(
              <Input
                placeholder="Name"
                style={{
                  height: "50px",
                  width: "300px",
                  marginRight: "20px",
                  borderRadius: "10px"
                }}
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("title-1", {
              rules: [
                { required: false, message: "Please input your username!" }
              ]
            })(
              <Input
                placeholder="Email Address"
                style={{
                  height: "50px",
                  width: "400px",
                  marginRight: "20px",
                  borderRadius: "10px"
                }}
              />
            )}
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              style={{
                backgroundColor: "black",
                color: "white",
                height: "50px",
                borderRadius: "10px"
              }}
            >
              SUBSCRIBE NOW
            </Button>
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
        <WrapperForm />
      </div>
    );
  }
}

export default App;
