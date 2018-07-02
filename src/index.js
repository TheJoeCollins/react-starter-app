import React from "react";
import ReactDOM from "react-dom";
import StateComponent from "./StateComponent";

import "./style.css";

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordOne: "Word One",
      wordTwo: "Word Two"
    };
  }
  componentDidMount = () => {};

  saySomething = () => {
    console.log("Say Something");
  };

  render() {
    return (
      <div className="flex-container">
        <div className="flex-one">
          <StateComponent />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#main"));
