import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

const store=configureStore({
    //store will contain the slices
    //put inside the reducer
    reducer:{
        cart:cartSlice
    }
})
export default store;
//configured the store.
//Provider to the app.js