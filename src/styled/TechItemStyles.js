import styled from 'styled-components';

/*
font-family: 'Lato', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'Oxygen', sans-serif;
font-family: 'Questrial', sans-serif;
font-family: 'Spicy Rice', cursive;
font-family: 'Lemon', cursive;

*/

const TechItemListContainer = styled.div`
  width: 75%;
  background: ghostwhite;
  margin: 0 auto;
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 50px;
`;


const TechTitle = styled.h3`
  width: 75%;
  font-size: 40px;
  margin: 5px auto;
  color: black;
  display: flex;
  justify-content: center;
  
  
  font-size: 4rem;
  text-align: center;
  width: 750%;
  color: dodgerblue;
  font-weight: bolder;
      text-shadow: 5px 5px 3px darkgray;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    margin: 20px 0;

`;

const TechItemContainer = styled.div`
  border: 4px solid dodgerblue;
  border-radius: 20px;
  margin: 5px;
  padding: 10px;
  width: 30%;

`;


const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`;

const ImageContainer = styled.div`
  border: 3px solid lightgrey;
  background: white;
  border-radius: 10px;
  margin: 10px auto;
  width: auto;
  display; flex;
  justify-content: center;
  align-content: center;
`;


const ImageItem = styled.img`
  max-height: 380px;
  width: 100%;
  padding: 10px;
  margin: 0 auto;

`;

const ItemH4 = styled.h4`
  margin: 6px;
  display: flex;
  font-family: 'Oxygen', sans-serif;
`;

const ItemH5 = styled.h5`
  font-family: 'Raleway', sans-serif;
  padding: 0;
  margin: .5rem;
`;

const ItemDescription = styled.p`
  font-family: 'Oxygen', sans-serif;
  margin: 10px;
  padding: 0;
`;

const ItemStatus = styled(ItemH5)`
   font-size: 1.5rem;

`;

const ItemAvailable = styled(ItemStatus)`
  color: green;
`;

const ItemRented = styled(ItemStatus)`
  color: dimgrey;
`;


export {
  TechItemListContainer,
  TechTitle,
  TechItemContainer,
  ButtonsContainer,
  ImageContainer,
  ImageItem,
  ItemH4,
  ItemH5,
  ItemDescription,
  ItemAvailable,
  ItemRented,









}