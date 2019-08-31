import React, { Component } from "react";
import FirstPage from './screens/first_section';
import SecondPage from './screens/second_section';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentState: 0
    }
  }

  render() {
    return (
      <div >
        <FirstPage />
        <section style={{ height: '100px', marginTop: '20px'}}></section>
        <SecondPage />
      </div>
    )
  }
}

export default App;
