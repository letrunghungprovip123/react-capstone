import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage } from '../utils/util';

const initialState = {
    inforUser : getLocalStorage("user"),
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getInforUser: (state,actions) => {
        state.inforUser = actions.payload
    },
  }
});

export const {getInforUser} = authSlice.actions

export default authSlice.reducer