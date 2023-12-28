import {createSlice} from "@reduxjs/toolkit";


const initialState = {

}

const generalSlice = createSlice({
    name: '',
    initialState,
    reducers: {}
})

export const GeneralActions = generalSlice.actions;

export default generalSlice.reducer