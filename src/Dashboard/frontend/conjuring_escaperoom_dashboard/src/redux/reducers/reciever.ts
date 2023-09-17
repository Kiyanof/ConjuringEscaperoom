// In your Redux store folder, create a file named "themeSlice.ts"
import { updateModel } from '@/api/updateModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface recieverInterface {
  _id: string,
  deviceName: string,
  ip: string,
  BlueUUID: string,
  RSSI: number,
  State: boolean,
}

interface reciever {
    recivers: recieverInterface[],
}

const initialState: reciever = {
    recivers: [],
};

// Create a Redux slice
const recieverSlice = createSlice({
  name: 'reciever',
  initialState,
  reducers: {
    initiateRecievers: (state, action) => {
      state.recivers = action.payload.value;
    },
    setReciever: (state, action) => {
      const newState = [...state.recivers]
      const index = action.payload.index
      const id = newState[index]._id
      newState[index] = action.payload.value
      state.recivers = newState
      updateModel(id, action.payload.value, 'reciever')
    },
  },
});

// Export the actions generated by createSlice
export const { initiateRecievers, setReciever } = recieverSlice.actions;

// Export the reducer
export default recieverSlice.reducer;