import React from "react";
import ReactDOM from "react-dom";
import StateComponent from "./components/StateComponent";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {};

  render() {
    return (
      <div>
        <StateComponent />
      </div>
    );
  }
}

ReactDOM.render(<AppMain />, document.querySelector("#main"));
