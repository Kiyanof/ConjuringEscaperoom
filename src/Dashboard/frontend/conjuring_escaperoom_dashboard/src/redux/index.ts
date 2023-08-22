// configStore.js
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Import Redux-Thunk middleware
import rootReducer from './reducers'; // Import your rootReducer

const middleware = [thunk]; // Add other middleware as needed

const store = configureStore({
  reducer: rootReducer,
  middleware,
  // You can also configure other options here, such as devTools, reducer serializability, etc.
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
