import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    name: 'Dom Decoco',
    email: 'domdecoco@protonmail.com',
    message: 'Hit the Bombay and go goblin'
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        nameUpdated(state, action) {
            state.name = action.payload;
        },
        emailUpdated(state, action) {
            state.email = action.payload;
        },
        messageUpdated(state, action) {
            state.message = action.payload;
        }
    }
})


export const ContactActions = contactSlice.actions;
export default contactSlice.reducer;