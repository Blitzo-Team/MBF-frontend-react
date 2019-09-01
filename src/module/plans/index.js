import React, { Component } from "react";
import First from "./screens/first_section";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <First />
      </div>
    );
  }
}

export default App;
