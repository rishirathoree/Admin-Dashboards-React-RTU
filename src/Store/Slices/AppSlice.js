import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    isBreadModalOpen : false
}

const AppSlice = createSlice({
    name:'App',
    initialState,
    reducers:{
        // add reducers
        TurnBreadModalOpen : (state)=>{
            state.isBreadModalOpen = !state.isBreadModalOpen
        }
    }
})

export const {TurnBreadModalOpen} = AppSlice.actions
export default AppSlice.reducer