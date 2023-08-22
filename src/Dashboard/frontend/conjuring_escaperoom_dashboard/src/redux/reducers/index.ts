// src/reducer/index.ts
import { combineReducers } from 'redux';
import themeReducer from './theme';
// Import other reducers as needed

const rootReducer = combineReducers({
  theme: themeReducer,
  // Add other reducers here
});

export default rootReducer;
