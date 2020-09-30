import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "Oct, 9, 2020" };
  }
  render() {
    return (
      <div className="count-main">

        <Clock deadline={this.state.deadline} />
      </div>
    );
  }
}
export default App;
