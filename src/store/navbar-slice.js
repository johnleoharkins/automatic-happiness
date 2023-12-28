import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    anchor: {
        top: false,
        left: false,
        bottom: false,
        right: false
    },
    menuList: [
        {
            name: 'Home',
            active: false,
            icon: 'home'
        },
        // {
        //     name: 'Dogs',
        //     active: false,
        //     icon: 'pets'
        // },
        {
            name: 'Info',
            active: false,
            icon: 'info'
        },
        // {
        //     name: 'Contact',
        //     active: false,
        //     icon: 'contactPage'
        // },

    ]
}

const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        toggleDrawer(state, action) {
            state.anchor[action.payload.anchor] = action.payload.open
            return state;
        }
    }
})

export const NavbarActions = navbarSlice.actions;
export default navbarSlice.reducer;