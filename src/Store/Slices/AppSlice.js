import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    isBreadModalOpen : false,
    isSidebarOpen : false,
}

const AppSlice = createSlice({
    name:'App',
    initialState,
    reducers:{
        // add reducers
        TurnBreadModalOpen : (state)=>{
            state.isBreadModalOpen = !state.isBreadModalOpen
        },
        TurnSiebarOpen : (state)=>{
            state.isSidebarOpen = !state.isSidebarOpen
        },
    }
})

export const {TurnBreadModalOpen,TurnSiebarOpen} = AppSlice.actions
export default AppSlice.reducer