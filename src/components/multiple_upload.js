import { Upload, Icon, Modal, Button, Input, Row, Col, Select, InputNumber } from "antd";
import React from "react";
import Fields from './fields_for_breakfast';

const Dragger = Upload.Dragger;

class PicturesWall extends React.Component {
  is_mounted = true;

  state = {
    previewVisible: false,
    previewImage: "",
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = (info, e)=>{
    const response = info.file.response;
    const fileList = this.state.fileList;
    this._isMounted = true;

    if (response) {
        // response.food_name = null;
        // response.cal = null;
        // response.pro = null;
        // response.carb = null;
        // response.fat = null;
        // response.grams = null;

        fileList.push(response); 
       
        setTimeout(() => {
          this.setState({ fileList })
     }, 100);
    }

    this.props.onChange(this.state.fileList)
}

  onRemove = () => {
    this.setState({ file: '' })
    const onChange = this.props.onChange;
    if (onChange) {
        onChange('');
    }
} 


  remove_file = (file) => {
    const { fileList } = this.state;
    
    const indexRemoved = fileList.indexOf(file);
    fileList.splice(indexRemoved, 1);

    this.setState({ fileList })
  } 
  
  // addFields = (text, item) => {
  //   const { fileList } = this.state;

  //   // console.log(text, item)
  //   // const index = fileList.indexOf(text);
  //   fileList[item].title.push(text);

  //   this.setState({ fileList });
  // }
  
  onAmountChange = (item, value) => {
    const { fileList } = this.state;
    const index = fileList.indexOf(item);

    fileList[index].title = value;
    
      setTimeout(() => {
        this.setState({ fileList })
      }, 100);
  }

  onAmountChange2 = (item, value) => {
    const { fileList } = this.state;
    const index = fileList.indexOf(item);
    fileList[index].cal = value;

      setTimeout(() => {
           this.setState({ fileList })
      }, 100);
  }

  onAmountChange3 = (item, value) => {
    const { fileList } = this.state;
    const index = fileList.indexOf(item);
    fileList[index].pro = value;
      setTimeout(() => {
           this.setState({ fileList })
      }, 100);
  }

  onAmountChange4 = (item, value) => {
    const { fileList } = this.state;
    const index = fileList.indexOf(item);
    fileList[index].carb = value;
      setTimeout(() => {
           this.setState({ fileList })
      }, 100);
  }

  onAmountChange5 = (item, value) => {
    const { fileList } = this.state;
    const index = fileList.indexOf(item);
    fileList[index].fat = value;
      setTimeout(() => {
           this.setState({ fileList })
      }, 100);
  }

  onAmountChange6 = (item, value) => {
    const { fileList } = this.state;
    const index = fileList.indexOf(item);
    fileList[index].grams = value;
      setTimeout(() => {
           this.setState({ fileList })
      }, 100);
  }


  render() {
    const API_UPLOAD = 'http://localhost:8000/api/file';

    return (
      <div className="clearfix">
         <div className="case-file-dragger" >
          <Upload
            // className= 'upload-list-inline'
            multiple={true}
            accept= '*'     
            action={API_UPLOAD}
            listType="picture"
          // fileList  ={fileList}
          // onPreview={this.handlePreview}
            onChange={this.handleChange}>
            <Button type="primary">+ Add Meals</Button>
          </Upload>

              {
                this.state.fileList.map((item, index) => 
                  <Row 
                     key={index+"__"+"happy_row"}
                     style={{ boxShadow: '1px 1px 10px gray', padding: '10px', borderRadius:'5px', marginTop: '20px'}}>
                    <Col span={11} style={{marginTop:'0px', padding: '2px'}}>
                      <img 
                       src = { API_UPLOAD+"?location="+ item.file_location }
                       style= {{ height: '250px', width: "200px"}} />
                    </Col>

                    <Col span={1} style={{borderRight: '1px solid white', height: '100px'}} />

                    <Col span={12} style={{marginTop:'0px', width: '200px', marginLeft: '5px'}} key={index}>
                      {/* <Fields add_fields = {this.addFields} indexOf={index} /> */}
                        <Select 
                          mode="tags" 
                          placeholder="Food Name"
                          key={item.title+"_"+"title_"+""+index} 
                          value= {item.title}
                          onChange={(value)=> { this.onAmountChange(item, value)}}/>

                        <InputNumber 
                          mode="tags"
                          key={item.protein+"_"+"protein_"+""+index} 
                          placeholder="Protein" 
                          style={{marginTop: '5px', width: '200px'}}  
                          onChange={(value)=> { this.onAmountChange3(item, value)}}/>

                        <InputNumber 
                          mode="tags"
                          key={item.carb+"_"+"carb_"+""+index} 
                          placeholder="Carb" 
                          style={{marginTop: '5px', width: '200px'}}  
                          onChange={(value)=> { this.onAmountChange4(item, value)}}/>

                        <InputNumber 
                          mode="tags"
                          key={item.fat+"_"+"fat_"+""+index} 
                          placeholder="Fat" 
                          style={{marginTop: '5px', width: '200px'}}   
                          onChange={(value)=> { this.onAmountChange5(item, value)}}/>

                        <InputNumber 
                          mode="tags"
                          key={item.gram+"_"+"gram_"+""+index} 
                          placeholder="gram" 
                          style={{marginTop: '5px', width: '200px'}}   
                          onChange={(value)=> { this.onAmountChange6(item, value)}}/>

                        <InputNumber  
                          min={1}
                          max={10}
                          mode="tags"
                          placeholder="Calorie" 
                          style={{marginTop: '5px', width: '200px'}} 
                          key={item.cal+"_"+"cal_"+""+index}  
                          onChange={(value)=> { this.onAmountChange2(item, value)}}/>          
                      </Col>
                  </Row> 
                  )
              }
        </div>
      </div>

    );
  }
}

export default PicturesWall;