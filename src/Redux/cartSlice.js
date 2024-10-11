import { createSlice } from "@reduxjs/toolkit";

const cartItems=JSON.parse(localStorage.getItem('cartItems')) || []; 

const initialState={
  items: cartItems,
  totalQuantity:0,
  totalPrice:0
}

const cartSlice=createSlice({
  name:'cart',
  initialState,
  reducers:{
    addToCart:(state,action)=>{
      const item=action.payload;
      const existingItem=state.items.find((i)=>i.title===item.title);

      if(existingItem){
        existingItem.quantity++;
      }else{
        state.items.push({...item,quantity:1})
      }
      state.totalQuantity++;
      state.totalPrice+=item.price;
    },
    removeFromCart:(state,action)=>{
      const item=action.payload;
      const existingItem=state.items.find((i)=>i.title===item.title);

      if(existingItem){
        state.totalQuantity-=existingItem.quantity;
        state.totalPrice-=existingItem.totalPrice;
        state.items=state.items.filter((i)=>i.title!==item.title);
      }
    }
  }
})

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;