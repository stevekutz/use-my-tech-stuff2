import styled from 'styled-components';


const LoginContainer = styled.div`
  width: 40%;
  padding: 4px;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid dodgerblue;
  padding: 20px 40px;
  background: whitesmoke;

  
  
`;

const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: space-evenly;
`;

const LoginInfoContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 35px;
`;

const LoginInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const Label = styled.div`
  width:90%;
  font-size: 1.1rem;
  margin-bottom: 0.25em;
  color: #222;
  font-weight: lighter;
  ${'' /* font-family: Oxygen, sans-serif; */}
`;
const Input = styled.input`
  padding: 2%;
  font-size: .85rem;
  border-radius: 5px;
  width: 100%;
  outline: none;
  border: 1px solid #cfcfcf;
`;


const LoginButton = styled.button`
  color: white;
  background: green;
  border: 2px solid darkslategrey;
  border-radius: 10px;
  width: 50%;
  text-align: center;
  margin: 5px;
  padding: 5px 0px;
  font-size: 1.2rem;
  font-weight: lighter;
  letter-spacing: 1px;
  margin-bottom: 0.25em;
  cursor: pointer;
  &:hover {
  color: white;
  font-weight: bold;
  background-color: seagreen;
  }
`;

const SignUpContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 35px;
`;


const SignUpButton = styled.button`
  outline-style: none;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid seagreen;
  background: lightskyblue;
  width: 40%;
  text-align: center;
  &:hover {
  background: dodgerblue;
  color: white;
  font-weight: bold;
  
  }


`;

const HTwo = styled.div`
  font-size: 2rem;
  text-align: center;
  width: 100%;
  color: dodgerblue;
  font-weight: bolder;
      text-shadow: 5px 5px 3px darkgray;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    margin: 20px 0;
`;


const HThree = styled(HTwo)`
  font-size: 1.75rem;
  color: deeppink;
  padding: 0;
  width: 100%;
`;



export {LoginContainer,
        LoginForm,
        LoginInfoContainer,
        LoginInfo,
        LoginButton,
        SignUpContainer,
        SignUpButton,
        Label,
        Input,
        HTwo,
        HThree,

};