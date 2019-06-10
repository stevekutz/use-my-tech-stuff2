import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, } from '../actions/userData';
import axios from 'axios';
import styled from 'styled-components';


import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const UserCard2 = (users) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            <h3>Username: {users.username}</h3>
            <p>Email: {users.email}</p>
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}


// import UserCard2 from './MDBCard';

const UserWrapper = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: space-around;
`;
const Title = styled.div`
  font-size: 2rem;
  text-align: center;
`;
const UserCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  background-image: linear-gradient(white, #F0F0F0);
  border-radius: 2px;
  height: 200px;
  margin: 8px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;


 const UserName = styled.div`
  font-family: 'Merienda', cursive;
  font-size: 2rem;
 `;

 const EmailName = styled.div`
  font-family: Dosis;
  font-size: 1.25rem;
 
 `;

class UserList extends Component {

  state = {
    users: [],
    imgURL: 'https://picsum.photos/100/100',
  };

  componentDidMount() {
    this.getUsers();
  }
  getUsers() {

    // then... start the API call
    // axiosWithAuth()
    axios
      .get(`https://usemytechstuff.herokuapp.com/api/users`)
      .then(res => {
        console.log("RESPONSE", res);
        this.setState({
          users: res.data
        })
      })
      .catch(err => {
        console.log("ERRRRRRRRRRRRRRRRRR", err);
      })
  }

  render() {
    return (
      <div>
        <Title>Techies</Title>
        <UserWrapper>
          {this.state.users.map((users, id) => (
            <div key = {id}>

              <MDBCol>
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage style = {{padding: "20px"}} src={`https://picsum.photos/100/100?random=${id}`} alt = {"userIMG"} />
                  <MDBCardBody>
                    <MDBCardText>
                      <UserName>{users.username}</UserName>
                      <EmailName>{users.email}</EmailName>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>


            </div>

          ))}
        </UserWrapper>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    users: state.users
  }
};

export default connect(
  mapStateToProps,
  { getUsers, }
)(UserList);


/*
<UserCard>
              <h3>Username: {users.username}</h3>
              <p>Email: {users.email}</p>
            </UserCard>
 */