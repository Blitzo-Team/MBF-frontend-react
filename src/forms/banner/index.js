import React, { Component } from "react";
import { Modal, Form, Input, Icon, Button } from 'antd';
import Upload from '../../components/upload';

const WrapperForm = Form.create()(
  class extends Component {

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
         this.props.handleSubmit(values);
         console.log(values)
        }
      });
    };

    render(){
      const {getFieldDecorator} = this.props.form;
      
      return ( 
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('banner-1', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Upload 

              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('banner-2', {
              rules: [{ required: false, message: 'Please input your Password!' }],
            })(
              <Upload />
            )}
          </Form.Item>
          <Form.Item>
            <Button  htmlType="submit">
              Submit
            </Button>
          </Form.Item>
      </Form>
      )
    }
  }
)



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentState: 0
    }
  }

  handleSubmit = (values) => {
    // this.formRef.props.form.validateFields((err, values) => {
    //     if (!err) {
    //       console.log(values);
    //     }
    //   });
    console.log(values)
    this.props.handleOk();
  }

  reset = () => {
      this.formRef.props.form.resetFields();
  }

  

  render() {
    return (
      <div >
          <Modal
            title="File Upload Slide"
            visible={this.props.visible}
            footer={false}
            onCancel={this.props.handleCancel}>
                
                <WrapperForm 
                   handleSubmit={()=>{ this.handleSubmit() }}
                  />
          </Modal>
          
      </div>
    )
  }
}

export default App;
