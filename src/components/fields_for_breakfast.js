import React, { Component, } from 'react'
import {  Col, Select, InputNumber  } from "antd";

class fields_for_breakfast extends Component {
    is_mounted = true;

    constructor(props) {
        super(props)

        this.state = {
            value:  [{ title: [], cal: 1, pro: [], carb: [], fat: [], gram: [] }],
        }
    }

  

    updateItem = (index, value) => {
        this._isMounted = true;
     
        const arr = this.state.value;
        arr[index] = value;
       
        setTimeout(() => {
            this.setState({value: arr});
            this.props.add_fields(this.state.value, this.props.indexOf)
        }, 100);

    }

    onAmountChange = (index, value) => {
       
        var objectToBeChanged = this.state.value[index];
        objectToBeChanged = { ...objectToBeChanged, title: value};
       
        setTimeout(() => {
             this.updateItem(index, objectToBeChanged);
        }, 100);
    }

    onAmountChange2 = (index, value) => {
        var objectToBeChanged = this.state.value[index];
        objectToBeChanged = { ...objectToBeChanged, cal: value};
         setTimeout(() => {
             this.updateItem(index, objectToBeChanged);
        }, 100);
    }

    onAmountChange3 = (index, value) => {
        var objectToBeChanged = this.state.value[index];
        objectToBeChanged = { ...objectToBeChanged, pro: value};
         setTimeout(() => {
             this.updateItem(index, objectToBeChanged);
        }, 100);
    }

    onAmountChange4 = (index, value) => {
        var objectToBeChanged = this.state.value[index];
        objectToBeChanged = { ...objectToBeChanged, carb: value};
         setTimeout(() => {
             this.updateItem(index, objectToBeChanged);
        }, 100);
    }

    onAmountChange5 = (index, value) => {
        var objectToBeChanged = this.state.value[index];
        objectToBeChanged = { ...objectToBeChanged, fat: value};
         setTimeout(() => {
             this.updateItem(index, objectToBeChanged);
        }, 100);
    }

    onAmountChange6 = (index, value) => {
        var objectToBeChanged = this.state.value[index];
        objectToBeChanged = { ...objectToBeChanged, gram: value};
         setTimeout(() => {
             this.updateItem(index, objectToBeChanged);
        }, 100);
    }


    componentDidMount() {
        this._isMounted = true;
    }
    
    componentWillUnmount() {
        this._isMounted = false;
    }
    
    render() {
        return (
          <div >
          {
            this.state.value.map((item, index) => 
                <Col span={12} style={{marginTop:'0px', width: '200px', marginLeft: '5px'}} key={index}>
                    <Select 
                      mode="tags" 
                      placeholder="Food Name"
                      key={item.title+"_"+"title_"+""+index} 
                      value= {item.title}
                      onChange={(value)=> { this.onAmountChange(index, value)}}/>

                    <InputNumber 
                      mode="tags"
                      key={item.protein+"_"+"protein_"+""+index} 
                      placeholder="Protein" 
                       style={{marginTop: '5px', width: '200px'}}  
                      onChange={(value)=> { this.onAmountChange3(index, value)}}/>

                    <InputNumber 
                      mode="tags"
                      key={item.carb+"_"+"carb_"+""+index} 
                      placeholder="Carb" 
                       style={{marginTop: '5px', width: '200px'}}  
                      onChange={(value)=> { this.onAmountChange4(index, value)}}/>

                    <InputNumber 
                      mode="tags"
                      key={item.fat+"_"+"fat_"+""+index} 
                      placeholder="Fat" 
                       style={{marginTop: '5px', width: '200px'}}   
                      onChange={(value)=> { this.onAmountChange5(index, value)}}/>

                    <InputNumber 
                      mode="tags"
                      key={item.gram+"_"+"gram_"+""+index} 
                      placeholder="gram" 
                      style={{marginTop: '5px', width: '200px'}}   
                      onChange={(value)=> { this.onAmountChange6(index, value)}}/>

                    <InputNumber  
                      min={1}
                      max={10}
                      mode="tags"
                      placeholder="Calorie" 
                      style={{marginTop: '5px', width: '200px'}} 
                      key={item.cal+"_"+"cal_"+""+index}  
                      onChange={(value)=> { this.onAmountChange2(index, value)}}/>          
                </Col>
              )
          }
        </div>
        )
    }
}

export default fields_for_breakfast
