import React from "react";
import ReactDOM from "react-dom";






export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1> This works </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#main"));
