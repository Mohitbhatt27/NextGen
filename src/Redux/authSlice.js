import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
  name:'auth',
  initialState:{
    status:false
  },
  reducers:{
    login:(state,action)=>{
      state.status=true
    },
    logout:(state,action)=>{
      state.status=false
    }
  }
})

export const {login,logout} = authSlice.actions
export default authSlice.reducer