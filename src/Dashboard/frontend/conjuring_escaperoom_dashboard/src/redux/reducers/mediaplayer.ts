// In your Redux store folder, create a file named "themeSlice.ts"
import { addModel } from "@/api/addModel";
import { updateModel } from "@/api/updateModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface playlistState {
  playlists: string[];
  playlist: any[];
  refresh: boolean;
}

const initialState: playlistState = {
  playlists: [],
  playlist: [],
  refresh: true,
};

// Create a Redux slice
const tagSlice = createSlice({
  name: "mediaplayer",
  initialState,
  reducers: {
    initiatePlaylists: (state, action) => {
      state.playlists = action.payload.value;
    },
    initiatePlaylist: (state, action) => {
      state.playlist = action.payload.value;
    },
    setRefresh: (state, action) => {
      const newState = action.payload.value;
      state.refresh = newState;
    },
    pushPlaylist: (state, action) => {
      const newState = [...state.playlists, action.payload.value];
      addModel({title: action.payload.value}, 'mediaplayer')
      state.playlists = newState;
    },
  },
});

// Export the actions generated by createSlice
export const {
  initiatePlaylist,
  initiatePlaylists,
  setRefresh,
  pushPlaylist
} = tagSlice.actions;

// Export the reducer
export default tagSlice.reducer;