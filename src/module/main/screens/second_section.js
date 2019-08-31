import React, { Component } from 'react'
import {Row, Col} from 'antd';
import Muscle from '../../assets/muscleman.png';


const LIST_SECOND = [ 
    { title: 'MUSCLE GAIN', key: 1, image: Muscle },
    { title: 'WEIGHT LOSS', key: 2, image: Muscle },
    { title: 'HEALTHY BALANCE', key: 3, image: Muscle },
    { title: 'VEGETARIAN', key: 4 , image: Muscle},
    { title: 'LOW CARB', key: 5, image: Muscle },
    { title: 'BULK FOODS', key: 6, image: Muscle },
];

class second_section extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
           return (
            // <div className="container">
                    <Row style={{textAlign: 'center', background: 'white'}}>
                        {
                            LIST_SECOND.map(item=>{
                                return (
                                <Col span={8} key={item.key} style={styles}>
                                    {item.title}
                                    <img src={item.image} style={{height: '380px', width: '400px'}}/>
                                </Col>
                                )
                            })
                        }
                    </Row>
            // </div>
           )
        }
    }

export default second_section;

const styles = {
    border: '1px solid black',
    height: '400px'
}