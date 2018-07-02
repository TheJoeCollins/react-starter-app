import React from "react";

//Example State component with stateless component
export default class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Stateful Component",
      newHeader: "",
      otherText: "",
      items: []
    };
  }

  _handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();

    this.setState(state => {
      return { name: state.newHeader };
    });
  };

  render() {
    return (
      <div>
        <h1 className="stateful_header">{this.state.name}</h1>

        <ChangeHeader
          handleChange={this._handleChange}
          handleSubmit={this._handleSubmit}
          inputText={this.state.inputText}
        />
      </div>
    );
  }
}

const ChangeHeader = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="newHeader"
        onChange={props.handleChange}
        value={props.inputText}
      />
      <input
        type="text"
        name="otherText"
        onChange={props.handleChange}
        value={props.inputText}
      />
      <input type="submit" value="Change Header" />
    </form>
  );
};
