import React from "react";
import ReactDOM from "react-dom";

//Object Spread operator and destructing
const person = {
  name: {
    first: "Joe",
    last: "Collins"
  },
  likes: ["Soccer", "Food", "Programming"],
  title: "Sir"
};
console.log("Person: ", person);

const { likes } = person;
console.log("Likes: ", likes);

const newLikes = [...likes, "Football", "Surfing"];

//What ever is added last will override whats before it
var newPerson = { ...person, likes: [...newLikes] };
console.log("New Likes: ", newLikes);

//New Person and the old person object
console.log("New Person: ", newPerson);
console.log("Original Person: ", person);

//Computed Names
const property = "age";
var newPerson = { ...newPerson, [property]: 25 };
console.log("Propert with age: ", newPerson);

const getData = () => {
  return new Promise((resolve, reject) => {});
};

//Named Export
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
