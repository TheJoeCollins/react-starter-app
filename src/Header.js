import React from "react";
import "./app.scss";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1> {this.props.title}</h1>
        <h2> {this.props.text}</h2>
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
