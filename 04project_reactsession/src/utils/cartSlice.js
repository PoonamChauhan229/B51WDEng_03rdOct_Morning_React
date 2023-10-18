import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        //actions
        addItem:(state,action)=>{
            //logic to modify
            state.items.push(action.payload)
        },
        clearLastItem:(state,action)=>{
            //
            state.items.pop()
        },
        clearCart:(state,action)=>{
            state.items=[]
        }
    }
})
// export actions
export const{addItem,clearLastItem,clearCart}=cartSlice.actions;

//export reducer
export default cartSlice.reducer;