import React from "react";
import ReactDOM from "react-dom";
const data = {
  name: "hello",
  red: "red"
};

const newData = { ...data };
console.log(newData);
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
