import React, { Component } from "react";
import First from "./screens/first_section";
import Second from "./screens/second_section";
import Third from "./screens/third_section";
import Fourth from "./screens/fourth_section";
import Fixed from "./screens/fixed_meals";
import { HashRouter, Switch, Route } from "react-router-dom";

class Plans extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const props = this.props;
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/plans" exact component={() => <First {...props} />} />
            <Route
              path="/plans/size"
              exact
              component={() => <Second {...props} />}
            />
            <Route
              path="/plans/days"
              exact
              component={() => <Third {...props} />}
            />
            <Route
              path="/plans/meals"
              exact
              component={() => <Fourth {...props} />}
            />
            <Route
              path="/plans/fixed"
              exact
              component={() => <Fixed {...props} />}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Plans;
