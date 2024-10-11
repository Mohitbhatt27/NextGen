import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import cartSlicing from './cartSlicing'

const store = configureStore({
  reducer:{
    auth:authSlice,
    cart:cartSlicing
  }
})

export default store