import React, { Component } from "react";
import { Form,  Col, Radio, Button } from "antd";

const WrapperForm = Form.create()(
  class extends Component {
    handleSubmit = (name) => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log(name);
          this.props.history.push('/plans/days');
        }
      });
    };

    render() {
      const INITIAL_SIZE_DATA = [
        {title: 'XL', name: 'Extra Large', calories: '750', protein: '50', Carb:'55', Fat: '32'},
        {title: 'L', name: 'Large', calories: '650', protein: '45', Carb:'55', Fat: '25'},
        {title: 'M', name: 'Medium', calories: '560', protein: '40', Carb:'45', Fat: '25'},
        {title: 'S', name: 'Small', calories: '465', protein: '35', Carb:'40', Fat: '17'},
        {title: 'XS', name: 'Extra Small', calories: '385', protein: '35', Carb:'37', Fat: '10'},
        {title: 'LC', name: 'Low Carb', calories: '410', protein: '40', Carb:'10', Fat: '25'},
      ];

      const { getFieldDecorator } = this.props.form;

      return (
        <Form>
          <Form.Item>
            {getFieldDecorator("size", {
              rules: [
                { required: false, message: "Please input your username!" }
              ]
            })(
              <Radio.Group size="large">
                 {
                   INITIAL_SIZE_DATA.map((item)=>{
                    return  (
                         <Col span={8}>
                          <Radio.Button
                            onClick={() => this.handleSubmit( item.name)}
                            className="radio-sizes"
                            value={item.name}
                            style={{
                              height: "260px",
                              width: "180px",
                              marginTop: '15px',
                              boxShadow: '1px 4px 10px white',
                              borderRadius: '20px',
                              marginLeft: '50px'
                            }}>
                          <center >
                            <div style={{marginTop: '20px', fontSize: '50px', fontWeight: 'bolder'}}>{item.title}</div>
                            <div> {item.name}</div>

                            <div style={{margin: '0px 0px', fontSize: '18px', color:"#cdc1c1", fontWeight: 'bolder'}}>
                              <div>Avg Cal: {item.calories}</div>
                              <div>Protein: {item.protein}</div>
                              <div>Carb: {item.Carb}</div>
                              <div>Fat: {item.Fat}</div>
                            </div>

                          </center>  
                          </Radio.Button>
                         </Col>
                      ) 
                   })
                 } 
                </Radio.Group>
            )}
          </Form.Item>
          {/* <Form.Item>
            <div style={{ marginTop: "50px" }}>
              <Button
                onClick={() => this.handleSubmit()}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  height: "50px",
                  borderRadius: "10px",
                  marginRight: "10px"
                }}>
                1-3 Days
              </Button>
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
        <WrapperForm {...this.props}/>
      </div>
    );
  }
}

export default App;
