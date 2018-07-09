import React from "react";
import "./app.scss";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex-container">
        <h1 className="flex-one"> {this.props.title}</h1>
        <h2 className="flex-one"> {this.props.text}</h2>
        <input
          type="text"
          name="title"
          onChange={this.props.onChange}
          value={this.props.title}
        />
        <input
          type="text"
          name="text"
          onChange={this.props.onChange}
          value={this.props.text}
        />
      </div>
    );
  }
}
