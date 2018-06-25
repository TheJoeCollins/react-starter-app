import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {};

  render() {
    return (
      <div className="flex-container">
        <div className="flex-one">
          <h1 className="hello"> Hello World </h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#main"));
