import React, { Component } from 'react';
import { Table, Input, Popconfirm, Form, Icon, Button, Switch, Checkbox, Popover } from 'antd';
import moment from 'moment';

const API_UPLOAD = 'http://localhost:8000/api/file';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr  {...props}/>
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends Component {

    getInput = () => {
        if (this.props.dataIndex === 'is_active') {
            return <Switch />
        }
        else if (this.props.dataIndex === 'id' && this.props.record[this.props.dataIndex]) {
            return <Input disabled={true}/>
        }
        return <Input />;
    };

    getInitialValue = () => {
        if (this.props.dataIndex === 'is_active' && (this.props.record['id'])) {
            return this.props.record[this.props.dataIndex];
        }
        else if (this.props.dataIndex === 'is_active') {
            return true;
        }
        return this.props.record[this.props.dataIndex];
    }

    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            text,
            record,
            index,
            valuePropName,
            ...restProps
        } = this.props;

        return (
            <EditableContext.Consumer>
                {(form) => {
                    const { getFieldDecorator } = form;
                    return (
                        <td {...restProps}>
                        {editing ? (
                            <FormItem style={{ margin: 0 }}>
                            {
                                getFieldDecorator(dataIndex, {
                                    rules: [{
                                    required: true,
                                    message: `Please Input ${title}!`,
                                    }],
                                    valuePropName: valuePropName,
                                    initialValue: this.getInitialValue(dataIndex),
                                })(this.getInput())
                            }
                            </FormItem>
                        ) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}

class ListTable extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            toBeInsertedData: null, 
            editingKey: '', 
            edit_id: '',
            hideColumns: [],
            datum: []
        };

        this.columns = [{
                title: 'Image',
                dataIndex: 'file_location',
                key: 'file_location',
                editable: false,
                render: (record) => {
                    console.log()
                   return <img src={ API_UPLOAD+"?location="+record } style={{height: '50px', width:'50px'}}/>
                }
            },
            {
                title: 'Food Name',
                dataIndex: 'food_name',
                key: 'name',
                editable: true,
            },
            {
                title: 'Calories',
                dataIndex: 'calories',
                editable: true,
                key: 'Calories',
              
            },
            {
                title: 'Protein',
                dataIndex: 'protein',
                editable: true,
                key: 'Protein',
              
            },
            {
                title: 'Carb',
                dataIndex: 'carb',
                editable: true,
                key: 'Carb',
              
            },
            {
                title: 'Fat',
                dataIndex: 'fat',
                editable: true,
                key: 'Fat',
              
            },
            {
                title: 'Grams',
                dataIndex: 'grams',
                editable: true,
                key: 'Grams',
              
            },
            {
                title: 'Fixed Status',
                dataIndex: 'fixed',
                editable: true,
                key: 'fixed',
                render: ()=> "Custom Meals"
              
            },
            {
                title: '',
                dataIndex: 'status',
                key: 'status',
                editable: false,
                valuePropName: 'checked',
                render:(value) => {
                    return <Switch checked/>;
                }
            },
            {
                title: '',
                dataIndex: 'action',
                render: (text, record) => {
                const editable = this.isEditing(record);
                return (
                    <div>
                    {editable ? (
                        <span>
                            <EditableContext.Consumer>
                                {form => (
                                <button className="link-button"
                                    onClick={() => this.save(form, record.index)}
                                    style={{ marginRight: 8 }}>
                                    <Icon type="check" style={{color: "green"}} />
                                </button>
                                )}
                            </EditableContext.Consumer>
                            <Popconfirm
                                title="Sure to cancel?"
                                onConfirm={() => this.cancel(record.index)} >
                                <button className="link-button">
                                    <Icon type ="close" style={{color: "red"}}/></button>
                            </Popconfirm>
                        </span>
                    ) : (
                        <div>
                            <button style={{border: '1px solid transparent', background: 'transparent'}} className="link-button" onClick={() => {this.edit(record.index); this.setState({edit_id: record.id})}}>
                            <Icon type ="edit" style={{}}
                            className="editDeleteButtons"/></button> &nbsp;&nbsp; 
                            {
                                // <a onClick={()=> this.delete(record)}><Icon type ="delete" style={{}}/></a>
                            }
                        </div>
                    )}
                    </div>
                );
                },
            },
        ];
    }

    isEditing = (record) => {
        return record.index === this.state.editingKey;
    };

    edit(key, record) {
        this.setState({ toBeInsertedData: null, editingKey: key});
    }

    callback =(response)=>{
        this.setState({ editingKey: '', toBeInsertedData: response.case_status });
    }

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            } 

            if (this.state.toBeInsertedData) {
                this.props.caseStatusAdd(row);
                this.setState({toBeInsertedData: null, editingKey: ''})
            } else {
                this.props.configStatusEdit(row, this.state.edit_id);
                this.setState({toBeInsertedData: null, editingKey: ''})
            }
        });
    }

    reset() {
        this.setState({ toBeInsertedData: null, editingKey: '' });
    }

    cancel = (key) => {
        this.setState({ toBeInsertedData: null, editingKey: '' });
    };

    add = () => {
        const value = this.props.status;

        if (this.state.toBeInsertedData) {
            return; 
        }

        const keys = this.columns.map(column => column.dataIndex);
        const newObj = keys.reduce((o, key) => ({ ...o, [key]: ''}), {})
        newObj.index = value.length;
        this.setState({ toBeInsertedData: newObj, editingKey: value.length })
    }

    delete = (row) => {
        this.props.onDelete(row);
    }

    filteredColumns = () => {
        return this.columns.filter(column => !this.state.hideColumns.includes(column.key))
    }

    render() {
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };

        const columns = this.filteredColumns().map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                    valuePropName: !col.valuePropName ? 'value' : col.valuePropName,
                }),
            };
        });

        var data 
        if (this.props.breakfast) {
            data = this.props.breakfast.slice();
            if (this.state.toBeInsertedData != null) {
                data.push(this.state.toBeInsertedData);
            }
            if (data) {
                data = data.map((item, index) => {
                    return {index: index, ...item};
                });    
            }
        }
        console.log(this.props.breakfast)
        return (
            <div>
               {/* <h1  style={{float: "left", color: "#22568f", fontWeight: "bold"}}>
                 Configuration: Case Status
               </h1> 
               */}
             
                <Table
                    className="table-bf"
                    style ={this.props.collapsed ===true ? {marginTop: '30px', width:' 94%'}:{marginTop: '30px', width:' 85%'}}
                    components={components}
                    dataSource={data}
                    columns={columns}
                    rowClassName="editable-row"
                    rowKey="index"
                />
            </div>
        );
    }
}


export default ListTable;
