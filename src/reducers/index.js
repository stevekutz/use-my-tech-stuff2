import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';
//import {selectedItemReducer} from './selectedItemReducer';


export default combineReducers({
  techItems: itemsReducer,
  //  selectedItemReducer,



});