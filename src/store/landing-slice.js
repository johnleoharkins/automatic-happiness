import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    gridContainerDimensions: {
        width: 0,
        height: 0
    },
    images: {
        landscapes: [],
        newville: []
    },
    activeIndex: 0,
    opacities: [0, 0, 1],
    loaded: false
}

const landingSlice = createSlice({
    name: 'landing',
    initialState,
    reducers: {
        setMainContentContainer(state, action){
            state.gridContainerDimensions.height = action.payload.height;
            state.gridContainerDimensions.width = action.payload.width;
        },
        setLandscapeImages(state, action){
            state.images.landscapes = [...action.payload];
        },
        setNewvilleImages(state, action){
            state.images.newville = [...action.payload];
        },
        setActiveIndex(state, action) {
            state.activeIndex = action.payload;
        },
        setOpacities(state, action) {
            state.opacities = [...action.payload]
        },
        loaded(state, action) {
            state.loaded = action.payload
        }
    }
})

export const LandingActions = landingSlice.actions;

export default landingSlice.reducer