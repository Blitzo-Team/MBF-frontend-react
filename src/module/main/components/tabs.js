import React, { Component } from 'react'

class Tabs extends Component {
    state = {
        currentState: 0
    }

    render() {
        const state = this.state.currentState;
        return (
        <div style={{marginTop: '20px'}}>
            
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <div style={state === 0 ? backgroundPlain : backgroundTabs}> 
                    <a onClick={()=>{ this.props.handleStates(0); this.setState({ currentState: 0 }) }}>
                        <center>
                            <p style={{fontSize: '18px', fontWeight: 'bold 800px', margin: '5px 0px'}}>1</p>
                        </center>
                    </a>
                </div>

                <div style={lineDiv}></div>

                <div style={state === 1 ? backgroundPlain : backgroundTabs}>  
                    <a onClick={()=>{ this.props.handleStates(1); this.setState({ currentState: 1 }) }}>
                        <center>
                            <p style={{fontSize: '18px', fontWeight: 'bold 800px', margin: '5px 0px'}}>2</p>
                        </center>
                    </a>
                </div>

                <div style={lineDiv}></div>

                <div style={state === 2 ? backgroundPlain : backgroundTabs}>  
                    <a onClick={()=>{ this.props.handleStates(2); this.setState({ currentState: 2 }) }}>
                        <center >
                            <p style={{fontSize: '18px', fontWeight: 'bold 800px', margin: '5px 0px'}}>3 </p>
                        </center>
                    </a>
                </div>
            </div>
        </div>
        )
    }
}

export default Tabs;

const backgroundTabs = {
    background: '#d3d3d3',
    borderRadius: '50%', 
    width: '35px', 
    height: '35px',
    color: 'white'
}

const backgroundPlain = {
    background: '#231f20',
    borderRadius: '50%', 
    width: '35px', 
    height: '35px',
    color: 'white'
}

const lineDiv = {
    width: '50px',
    border: '1px solid #d3d3d3',
}

