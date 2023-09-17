import { createSlice } from "@reduxjs/toolkit"

interface TeamFormState {
    footerLabel: string,
}

export const TeamFormSlice = createSlice({
  name: "teamForm",
  initialState: {
    counterActive: true,
    helpTexts: {
      counterInp: "تعداد اعضا را وارد کنید",
      submitInp:  " پلیر تعریف شد",
    },
    counter: 4,
  },
  reducers: {
    setCounter: (state, action) => {
      state.counter = action.payload
    },
    setCounterActive: (state, action) => {
        state.counterActive = action.payload
    },
  },
});


export const { setCounter, setCounterActive } = TeamFormSlice.actions
export default TeamFormSlice.reducer

