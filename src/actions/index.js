import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";

// create action types for getting data
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const ADDING_TECH = "ADDING_TECH";
export const ADDED_TECH = "ADDED_TECH";   // OMG

export const DELETING_TECH = "DELETING_TECH";
export const DELETE_TECH = "DELETE_TECH";

export const UPDATING_TECH = "UPDATING_TECH";
export const UPDATE_TECH = "UPDATE_TECH";


// generic action type for any error
export const ERROR = "ERROR";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios // we post login creds to login server
    .post(`https://usemytechstuff.herokuapp.com/api/auth/login`, creds)
    .then(res => {
      // local storage stores token passed in
      console.log('response.data is >> ', res.data);
      //    localStorage.setItem("token", res.data.payload);
      localStorage.setItem('token', res.data.token);        // added
      localStorage.setItem('user_id', res.data.user_id);    // added
      localStorage.setItem('username', res.data.username);    // Just added , not showing up !!!
      dispatch({type: LOGIN_RESOLVED, payload: res.data})
    })
    .catch(err => {
      console.log("login err: ", err);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
        //     localStorage.removeItem("user_id");
      }
      //    dispatch({ type: LOGIN_RESOLVED });
      dispatch({ type: ERROR });                       // JUST added
    });
};

export const getTech = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios // NOTICE DIFFERENT ENDPOINT !!!!!
    .get("https://usemytechstuff.herokuapp.com/api/tech",
      {headers: { Authorization: localStorage.getItem("token") }
      })
    .then(res => {
      console.log(" >>>>this is res  ", res);
      dispatch({
        type: FETCH_DATA_SUCCESS,
        // payload: res.data.data
        payload: res.data
      });
    })
    .catch(err => {
 //     console.log(err.response);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: ERROR, payload: err.response });
    });
};



export const addTech = (tech) => dispatch => {


  dispatch({type: ADDING_TECH});
  axios
    .post(`https://usemytechstuff.herokuapp.com/api/tech`, tech,
      {headers: { Authorization: localStorage.getItem("token") }
      })

    .then(res => {
      console.log(" addTech payload",res);
      dispatch({
        type: ADDED_TECH,
        payload: res.data

      });
    })
    .catch(err =>{
      dispatch({type: ERROR, payload: err});
    })
};


export const deleteTech = (id) => dispatch => {
  dispatch({type: DELETING_TECH});
  axios
    .delete(`https://usemytechstuff.herokuapp.com/api/tech/${id}`,
      {headers: { Authorization: localStorage.getItem("token") }
      })
    .then(res => {
      console.log("we are deleting !!  ", res);
      dispatch({
        type: DELETE_TECH,
        payload: res.data
      });
    })
    .catch(err =>{                // err
      dispatch({type: ERROR, payload: err.response});
    })
};

export const updateTech = (id, tech) => dispatch => {
  dispatch({type: UPDATING_TECH});
  axios
    .put(`https://usemytechstuff.herokuapp.com/api/tech/${id}`, tech,
      {headers: { Authorization: localStorage.getItem("token") }
      })
    .then(res => {
      console.log(res);
      dispatch({
        type: UPDATE_TECH,
        payload: res.data
      });
    })
    .catch(err =>{                // err
      dispatch({type: ERROR, payload: err.response});
    })
};