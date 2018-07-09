import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title",
      text: "text"
    };
  }

  _changeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="flex-container">
        <div className="header">
          <div className="flex-one" />
          <Header
            title={this.state.title}
            text={this.state.text}
            onChange={this._changeText}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#main"));
