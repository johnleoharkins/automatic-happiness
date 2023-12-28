import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    images: [],
    windowDimensions: {
        height: 0,
        width: 0
    },
    activeIndex: 0,
    opacities: [0, 0, 0, 1],
    loaded: false
}

const jazzminSlice = createSlice({
    name: 'jazzmin',
    initialState,
    reducers: {
        setImages(state, action){
            state.images = [...action.payload];
        },
        setWindowDimensions(state, action) {
            state.windowDimensions.height = action.payload.height;
            state.windowDimensions.width = action.payload.width;
        },
        setActiveIndex(state, action){
            state.activeIndex = action.payload;
        },
        setOpacities(state, action) {
            state.opacities = [...action.payload]
        },
        loaded(state, action){
            state.loaded = action.payload
        }
    }
})

export const JazzminActions = jazzminSlice.actions;

export default jazzminSlice.reducer;