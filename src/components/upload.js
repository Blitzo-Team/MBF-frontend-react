import { Upload, Icon, Modal, Button } from "antd";
import React from "react";


class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    fileList: []
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => {
    // var reponse = fileList[0].response != undefined ? fileList[0].response.id : null;
    this.props.onChange(fileList);
    this.setState({ fileList });
  };

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



  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <div className="clearfix">
        <Upload
          action="http://localhost:8000/api/file"
          listType="picture"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          onDeselect={ (value) => this.remove_file_tag( value) }
        >
          <Button>
            <Icon type="upload" /> Upload
          </Button>
        </Upload>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall;