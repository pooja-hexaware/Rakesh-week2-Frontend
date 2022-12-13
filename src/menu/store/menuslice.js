import { createSlice } from "@reduxjs/toolkit";
import { fetchMenuList,fetchToppingsList } from "./menu.actions";

const menuslice = createSlice({
    name:"menu",
    initialState: {
        menu: [],
        toppings : []
    },
    reducers:{
        addmenu: (state, action) => {
            state.menu = action.payload;
          },
          addtoppings: (state, action) => {
            state.toppings = action.payload;
          }
    },
    extraReducers:{
        [fetchMenuList.fulfilled]: (state, action) => {
            state.menu = action.payload;
        },
        [fetchToppingsList.fulfilled]: (state, action) => {
            state.toppings = action.payload;
        }
    }
})

export const { addmenu, addtoppings } = menuslice.actions


export default menuslice.reducer