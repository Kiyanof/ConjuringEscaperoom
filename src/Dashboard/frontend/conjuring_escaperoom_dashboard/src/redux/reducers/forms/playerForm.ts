import { createSlice } from "@reduxjs/toolkit"

interface PlayerFormState {
    footerLabel: string,
}

export const PlayerFormSlice = createSlice({
  name: "playerForm",
  initialState: {
    helpTexts: {
        fname: "فیلد نام ضروری است ( حداقل ۳ حرف )",
        lname: "فیلد نام خانوادگی ضروری است ( حداقل ۳ حرف )",
        callerID: "فیلد شماره همراه ضروری است ( حداقل یک عضو باید وارد شود )",
        age: "این فیلد اختیاری است"
    },
  },
  reducers: {
  },
});


export const { } = PlayerFormSlice.actions
export default PlayerFormSlice.reducer

