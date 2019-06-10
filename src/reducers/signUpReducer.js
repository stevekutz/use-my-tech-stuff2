import {
  CREATE_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UPDATED_USER_SUCCESS,
  UPDATED_USER_FAILURE,
} from '../actions';

const initialState = {
  users: [],
  user_id: '',
  username: '',
  fetchingUsers: false,
  addingUser: false,
  updatingUser: false,
  error: null
};

export const signUpReducer = (state = initialState, action) => {
  console.log('signUpReducer', action);
  switch (action.type) {
    case CREATE_USER_START:
      return {
        ...state,
        addingUser: true
      };

    case ADD_USER_SUCCESS:
      return {
        addingUser: false,
        name: action.payload.name,
        user_id: action.payload.user_id,
        username: action.payload.username,
        users: action.payload,
        error: null
      };

    case ADD_USER_FAILURE:
      return {
        ...state,
        addingUser: false,
        error: action.payload
      };

    case FETCH_USERS_START:
      return {
        ...state,
        error: '',
        fetchingUsers: true
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetchingUsers: false,
        addingUser: false,
        users: action.payload,
        error: null
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        fetchingUsers: false,
        error: action.payload
      };

    case UPDATED_USER_SUCCESS:
      return {
        ...state,
        updatingUser: false,
        error: null,
        users: action.payload
      };

    case UPDATED_USER_FAILURE:
    return {
      ...state,
      updatingUser: false,
      error: action.payload
    };

    default:
      return state;
  }
};