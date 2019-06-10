import axios from 'axios';

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
// export const DELETE_USERS_SUCCESS = 'DELETE_USERS_SUCCESS';
// export const DELETE_USERS_FAILURE = 'DELETE_USERS_FAILURE';


export const getUsers = () => dispatch => {
  // dispatch a "start" action
  dispatch({ type: FETCH_USERS_START });
  // then... start the API call
  // axiosWithAuth()
  axios
    .get(`https://usemytechstuff.herokuapp.com/api/users`)
    .then(res => {
      console.log("RESPONSE", res);
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERRRRRRRRRRRRRRRRRR", err);
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: err
      })
    })
}

export const updateUser = id => dispatch => {
  axios
    .put(`https://usemytechstuff.herokuapp.com/api/users/${id}`)
    .then(res => {
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: id
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_USER_FAILURE });
    });
}

// export const deleteUser = id => dispatch => {
//   axios
//     .delete(`${'https://usemytechstuff.herokuapp.com/api/users'}/${id}`)
//     .then(res => {
//       dispatch({
//         type: DELETE_USER_SUCCESS,
//         payload: id
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       dispatch({ type: DELETE_USER_FAILURE });
//     });
// };