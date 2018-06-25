import React from "react";
import "./stateful.css";

export default class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Stateful Component",
      items: []
    };
  }

  _handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div>
        <h1 className="stateful_header">{this.state.name} </h1>
        <form>
          <label>
            Change Title:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
