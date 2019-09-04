import React, { Component } from 'react'
import { Drawer } from 'antd';
import TalbeBF from '../tables/breakfast';
import { connect } from 'react-redux';
import { breakFastList } from '../../actionCreator';

class BreakFast extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    componentDidMount(){
        this.props.breakFastList();
    }

    render() {
        console.log(this.props.breakfast)
        return (
            <div>
                   <Drawer
                        height={"100vh"}
                        width={"400px"}
                        style={this.props.collapsed === true ?
                            {marginLeft: '80px'}
                            :
                            {marginLeft: '200px', marginRight: '200px'}
                        }
                        title="List of Breakfast Meals"
                        placement={"top"}
                        closable={false}
                        onClose={this.props.onClose}
                        visible={this.props.visible}
                        // visible={true}
                        >
                        
                        <TalbeBF  breakfast = {this.props.breakfast} collapsed = {this.props.collapsed}/>
                    </Drawer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return {
    breakfast: state.bf.bf.data
   }
}

const mapDispatchToProps = {
    breakFastList
}

export default connect(mapStateToProps, mapDispatchToProps)(BreakFast)
