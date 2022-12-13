import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchMenuList= createAsyncThunk("fetchMenuList/menu",async()=>{
    const result =  await axios.get('http://localhost:3001/menu');
    return result.data;
    })

 export const fetchToppingsList= createAsyncThunk("fetchToppingsList/toppings",async()=>{
        const result =  await axios.get('http://localhost:3001/toppings');
        return result.data;
        })