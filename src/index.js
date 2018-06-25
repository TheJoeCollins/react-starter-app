import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { getTopStories } from "./reducers/hackernews/HackerReducer";
import { HackerReducer } from "./reducers/hackernews/HackerReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

//Sample Project Demo React-Redux
//Hacker News Api - Real Time Data
//React-Redux

const middleware = applyMiddleware(thunk, logger);
const store = createStore(HackerReducer, middleware);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.props.getStories();
  };

  render() {
    return (
      <div>
        <h1> This works </h1>
      </div>
    );
  }
}

const mapState = state => {
  return {
    loading: state.loading,
    topStories: state.topStoriesIds
  };
};
const mapDisp = dispatch => {
  return {
    getStories: () => {
      dispatch(getTopStories());
    }
  };
};

const AppMain = connect(
  mapState,
  mapDisp
)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppMain />
  </Provider>,
  document.querySelector("#main")
);
