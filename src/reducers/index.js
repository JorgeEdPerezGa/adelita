import { combineReducers } from 'redux';
import card from './cardReducer';

const rootReducer = combineReducers({
  cards: card
});

export default rootReducer;
