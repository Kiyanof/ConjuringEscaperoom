// src/reducer/index.ts
import { combineReducers } from 'redux';
import themeReducer from './theme';
import crossReducer from './cross';
import goblinFinder from './goblinFinder';
import recieverReducer from './reciever';
import teamForm from './forms/teamForm';
import gameForm from './forms/gameForm';
import playerForm from './forms/playerForm'
import tagReducer from './tag'
import relayReducer from './relay'
import mediaplayerReducer from './mediaplayer'




// Import other reducers as needed

const rootReducer = combineReducers({
  theme: themeReducer,
  cross: crossReducer,
  goblin: goblinFinder,
  reciever: recieverReducer,
  teamForm: teamForm,
  gameForm: gameForm,
  playerForm: playerForm,
  tag: tagReducer,
  relay: relayReducer,
  mediaplayer: mediaplayerReducer,

  
  // Add other reducers here
});

export default rootReducer;
