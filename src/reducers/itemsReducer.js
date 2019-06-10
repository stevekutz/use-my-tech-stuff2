import {
  LOGIN_START,
  LOGIN_RESOLVED,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,

  ADDING_TECH,
  ADDED_TECH,

  DELETING_TECH,
  DELETE_TECH,

  UPDATING_TECH,
  UPDATE_TECH,

  ERROR,

} from "../actions";

const initialState = {
  techItems: [],                   // ADDED
  user_id: '',               // ADDED
  username: '',
  isLoggingIn: false,
  error: '',
  fetchingData: false,
  addingTech: false,
  deletingTech: false,
  updatingTech: false,

 // token: localStorage.getItem('token'),
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoggingIn: true
      };
    }
    case LOGIN_RESOLVED: {
      return {
        ...state,
        isLoggingIn: false,
        name: action.payload.name,            // ADDED
        user_id: action.payload.user_id,     // ADDED
        username: action.payload.username            // ADDED
      };
    }

    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetchingData: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingData: false,
        isLoggingIn: false,
        techItems: action.payload,
      };


    case ADDING_TECH:
      return {
        ...state,
        addingTech: true,
      };

    case ADDED_TECH:
      return {
        ...state,
        addingTech: false,
        techItems: action.payload,
      };


/*
    case ADDED_TECH:
      return {
        ...state,
        addingTech: false,
        techItems: [...state.techItems, {...action.payload}],

      };
*/

    case DELETING_TECH:
      return {
        ...state,
        deletingTech: true,

      };

    case DELETE_TECH:
      return {
        ...state,
        deletingTech: false,
        techItems: action.payload,

      };

    case UPDATING_TECH:
      return {
        ...state,
        updatingTech: true,
      };
/*
    case UPDATE_TECH:
      return {
        ...state,
        addingTech: false,
        techItems: [...state.techItems, {...action.payload}],

      };
*/
    case UPDATE_TECH:
      return {
        ...state,
        updatingTech: false,
        techItems: action.payload,

      };




    case ERROR:
      return {
        ...state,
        error: action.payload,

      };
    default:
      return state;

  }

};
