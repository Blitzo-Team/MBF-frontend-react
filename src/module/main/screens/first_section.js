import React, { Component } from "react";
import {Carousel} from 'react-bootstrap';
import Second from '../../assets/slide-2.png';
import Thiord from '../../assets/slide-3.png';
import {Button, Row, Col} from 'antd';
import Tabs from '../components/tabs';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentState: 0
    }
  }

  firstSection = ()=>{
    return (
      <Carousel>
        <Carousel.Item>
          <section style={{ width: '100%', height: '600px', backgroundColor: 'white'}} >
              <div className="first-page container" style={{textAlign: 'right', fontSize: '100px', fontWeight: 'bolder'}}>
                <p > FUEL UP </p>
              </div>

              <div className=" container" style={{textAlign: 'right', fontSize: '100px', fontWeight: 'bolder'}}>
                <p> YOUR DAY <br/> 
                <Button style={{background:'#6ACBDF', color: 'white'}}>View Options</Button>
                </p>
              </div>
          </section>

          <Carousel.Caption>
            <h3>1</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
         
        <section style={{ width: '100% ', height: '600px', backgroundSize: 'cover', backgroundImage: `url(${Second})`}}>
        </section>

        <Carousel.Caption>
            <h3>2</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <section style={{ width: '100% ', height: '600px', backgroundSize: 'cover', backgroundImage: `url(${Thiord})` }}>
        </section>

          <Carousel.Caption>
            <h3>3</h3>
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }

  secondSection = ()=>{
    return (
      <Row>
        <Col span={12} style={{border: '1px solid black', height: '400px', backgroundColor: 'black'}}>
         <p style={{display: 'flex', justifyContent: 'center', marginTop: '170px',  color: 'white'}}>Play video</p>
        </Col>
      
        <Col span={12} style={{border: '1px solid black', height: '400px'}}>
         <div style={{fontFamily: 'Electrolize', fontSize: '30px', textAlign: 'center'}} >How MBF works</div>
         <Tabs handleStates = {this.handleStates}/>

        </Col>
      </Row>
    )
  }

  viewOfManualCarousel = ()=>{
    const value = this.state.currentState;

    // if(value === 2 ){
    //   alert('3');
    // } else if( value === 1) {
    //   alert('1')
    // } else {
    //   alert('0')
    // }
  }

  handleStates = (value)=>{
    this.setState({currentState: value})
  }

  render() {
    return (
      <div >
        <section> { this.firstSection() } </section>
        <section> { this.secondSection() } </section>
   
      </div>
    )
  }
}

export default App;
