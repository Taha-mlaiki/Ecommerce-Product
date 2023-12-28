import { createSlice } from "@reduxjs/toolkit";
import image from "./assets/images/image-product-1-thumbnail.jpg"
const cartSlice = createSlice({
    name:"cartSlice",
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            
            return [...state,action.payload]
        },
        removeItem:(state,action)=>{
           return []
        },
        plusQuantity:(state)=>{
            const updatedItem = [{...state[0],quantity: state[0].quantity + 1}]
            return updatedItem
        },
        minusQuantity:(state)=>{
            const updatedItem = [{...state[0],quantity: state[0].quantity - 1}]
            return updatedItem
        }
    }
})

export const  {addItem,removeItem,plusQuantity,minusQuantity}  = cartSlice.actions;

export default cartSlice.reducer