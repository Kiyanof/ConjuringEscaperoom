// In your Redux store folder, create a file named "themeSlice.ts"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state for the theme
interface GoblinFinderState {
  refresh: boolean
}

const initialState: GoblinFinderState = {
  refresh: false,

};

// Create a Redux slice
const themeSlice = createSlice({
  name: 'goblinFinder',
  initialState,
  reducers: {
    // Action to toggle between dark and light mode
    setRefresh: (state, action) => {
      console.log(action.payload)
      state.refresh = action.payload.value;
    },
  },
});

// Export the actions generated by createSlice
export const { setRefresh, } = themeSlice.actions;

// Export the reducer
export default themeSlice.reducer;
