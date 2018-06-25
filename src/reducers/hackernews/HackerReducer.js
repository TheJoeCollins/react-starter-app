import { sendRequest } from "./util/Axios";

//Individual Item
///v0/item/<id>.

//Top 500 stories
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

const actions = {
  FETCHING: "FETCHING",
  FETCHING_SUCCESS: "FETCHING_SUCCESS",
  FETCHING_FAILURE: "FETCHING_FAILURE"
};

const initState = {
  topStoriesIds: [],
  topStoriesData: [],
  loading: false
};

export const HackerReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.FETCHING:
      return { ...state, loading: true };

    case actions.FETCHING_SUCCESS:
      return {
        ...state,
        topStoriesIds: [...action.payload],
        loading: false
      };

    case actions.FETCHING_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export const getTopStories = () => {
  return async dispatch => {
    dispatch({
      type: actions.FETCHING
    });
    try {
      const data = await sendRequest("get", "/topstories.json?print=pretty", {
        params: {
          id: 10
        }
      });
      dispatch({
        type: actions.FETCHING_SUCCESS,
        payload: data.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: actions.FETCHING_FAILURE
      });
    }
  };
};
