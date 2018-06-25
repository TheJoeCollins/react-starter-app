import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {};

  render() {
    return (
      <div>
        <h1> This works </h1>
      </div>
    );
  }
}

ReactDOM.render(<AppMain />, document.querySelector("#main"));
