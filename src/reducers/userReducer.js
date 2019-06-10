import axios from 'axios';


import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_SUCCESS,
} from '../actions';

const initialState = {
  users: [],
  error: '',
  fetchingUsers: false,
  updatingUser: false,
  deletingUser: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        error: '',
        fetchingUsers: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingUsers: false,
        users: action.payload
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        fetchingUsers: false,
        error: action.payload
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updatingUser: false,
        users: action.payload
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        updatingUser: false,
        error: ''
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    default:
      return state;
  }
};
