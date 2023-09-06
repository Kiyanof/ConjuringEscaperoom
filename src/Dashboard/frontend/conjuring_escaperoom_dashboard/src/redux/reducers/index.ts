// src/reducer/index.ts
import { combineReducers } from 'redux';
import themeReducer from './theme';
import crossReducer from './cross';

// Import other reducers as needed

const rootReducer = combineReducers({
  theme: themeReducer,
  cross: crossReducer,
  // Add other reducers here
});

export default rootReducer;
