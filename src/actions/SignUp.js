import axios from 'axios';

export const FETCH_USERS_START = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const CREATE_USER_START = 'CREATE_USER';
// export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';
export const UPDATED_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATED_USER_FAILURE = 'UPDATE_USER_FAILURE';


export const getUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  axios
    .get(`https://usemytechstuff.herokuapp.com/api/users`,
      { headers: { Authorization: localStorage.getItem("token") } }
    )
    .then(res => {
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_USERS_FAILURE, payload: err });
    });
};

export const addUser = newUser => dispatch => {
  dispatch({ type: CREATE_USER_START });
  axios
    .post('https://usemytechstuff.herokuapp.com/api/auth/register', newUser)
    .then(res => {
      dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_USER_FAILURE, payload: err });
    });
}

export const updateUser = updatedUser => dispatch => {
  dispatch({ type: UPDATED_USER_SUCCESS });
  axios
    .put(`https://usemytechstuff.herokuapp.com/api/users/${updatedUser.id}`, updatedUser)
    .then(res => {
      this.setState({ users: res.data });
      console.log(res);
      this.props.history.push('/users');
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATED_USER_FAILURE, payload: err });
    });

  // setActiveUser = user => {
  //   this.setState({ activeUser: user });
  // };
}



