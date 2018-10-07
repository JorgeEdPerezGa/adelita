import { combineReducers } from 'redux';
import card from './cardReducer';
import videos from './videoReducer';
import currentVideo from './currentVideoReducer';

const rootReducer = combineReducers({
  cards: card,
  videos,
  currentVideo
});

export default rootReducer;
