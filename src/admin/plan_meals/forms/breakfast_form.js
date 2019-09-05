import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Drawer, Button } from "antd";
import UploadBreakfast from "../../../components/multiple_upload";
import { breakFastAdd } from "../../actionCreator";

const WrapperForm = Form.create()(
  class extends Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.props.breakFastAdd(values);
          this.props.onClose();
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;

      return (
        <Form>
          <Form.Item>
            {getFieldDecorator("breakfast", {
              rules: [
                { required: false, message: "Please input your username!" }
              ]
            })(<UploadBreakfast />)}
          </Form.Item>
          {/*       
          <Form.Item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
            <Button
              htmlType="submit"
              type="primary"
              style={{
                float: 'right',
                height: "50px",
                borderRadius: "10px"
              }}>
             Submit
            </Button>

            <Button
              style={{
                float: 'right',
                height: "50px",
                borderRadius: "10px"
              }}>
             Cancel
            </Button>
          </Form.Item> */}

          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              borderTop: "1px solid #e9e9e9",
              padding: "10px 16px",
              background: "#fff",
              textAlign: "right"
            }}
          >
            <Button onClick={this.props.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} type="primary">
              Submit
            </Button>
          </div>
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
        <Drawer
          title=" Add Menu Meals for Breakfast"
          width={500}
          placement="right"
          closable={false}
          onClose={this.props.onClose}
          visible={this.props.visible}
          footer={true}
          // visible={false}
        >
          <WrapperForm breakFastAdd={breakFastAdd} {...this.props} />
        </Drawer>
      </div>
    );
  }
}

const mapDispatchToProps = {
  breakFastAdd
};

export default connect(
  null,
  mapDispatchToProps
)(App);
