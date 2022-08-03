const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const asynchAction = {
  fetchUserFailure: (error) => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error,
    };
  },
  fetchUserSuccess: (users) => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users,
    };
  },
  fetchUserRequest: () => {
    return {
      type: FETCH_USERS_REQUEST,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        users: [],
        error: '',
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(asynchAction.fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/user")
      .then((response) => {
        // response.data[]
        const users = response.data.map((user) => user.id);
        dispatch(asynchAction.fetchUserSuccess(users));
      })
      .catch((error) => {
        // error.message
        dispatch(asynchAction.fetchUserFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
