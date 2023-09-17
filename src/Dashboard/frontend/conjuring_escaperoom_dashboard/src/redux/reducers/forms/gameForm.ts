import { createSlice } from "@reduxjs/toolkit"

export const GameFormSlice = createSlice({
  name: "gameForm",
  initialState: {
    durationStartTime: { formatted24: "0:00", formatted12: "12:00 am", formattedSimple: "12:00", hour: 0, hour12: 12, minute: 0, meridiem: "am", isValid: true },
    durationEndTime: { formatted24: "0:00", formatted12: "12:00 am", formattedSimple: "12:00", hour: 0, hour12: 12, minute: 0, meridiem: "am", isValid: true },
    time: { formatted24: "0:00", formatted12: "12:00 am", formattedSimple: "12:00", hour: 0, hour12: 12, minute: 0, meridiem: "am", isValid: true },
    calendar: {
      date: null
    },
    options: [
      "اسکیپزوم",
      "تایم فور فان",
      "ایران اسکیپ",
      "تلفن",
      "اینستاگرام",
      "همکار",
    ],
    helpTexts: {
      tName: "این فیلد اختیاری است (صرفا برای دسته بندی تیم های شما در پنل پیامکی است)",
      exprienceCounter: "این فیلد اختیاری است (صرفا برای دسته بندی تیم های شما در پنل پیامکی است)",
      gameTime: "این فیلد ضروری است (زمان اتمام بازی برای شما هشدار در صفحه نمایش ظاهر میشود)",
      sansTime: "زمان شروع سانس را انتخاب کنید",
      reserveDate: "تاریخ سانس را انتخاب کنید",
      startTime: "زمان شروع را انتخاب کنید",
      endTime: "زمان پایان را انتخاب کنید",
    },
  },
  reducers: {
    setCalendarDay: (state, action) => {
      state.calendar.date = action.payload
    },
    setTime: (state, action) => {
      state.time = action.payload
    },
    setDurationStartTime: (state, action) => {
      try {
        state.durationStartTime = action.payload.value
      } catch (error) {
        console.log('error')
      }
    },
    setDurationEndTime: (state, action) => {
      try {
        state.durationEndTime = action.payload.value
      } catch (error) {
        console.log('error')
      }
    },
  },
});


export const { setCalendarDay, setTime, setDurationEndTime, setDurationStartTime } = GameFormSlice.actions
export default GameFormSlice.reducer

