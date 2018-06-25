import React from "react";
import ReactDOM from "react-dom";
import StateComponent from "./components/StateComponent";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <StateComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#main"));
