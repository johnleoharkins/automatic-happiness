import {configureStore} from '@reduxjs/toolkit';
import weatherSlice from "./weather-slice";
import navbarSlice from "./navbar-slice";
import contactSlice from "./contact-slice";
import jazzminSlice from "./jazzmin-slice";
import landingSlice from "./landing-slice";

const store = configureStore({
    reducer: {
        weather: weatherSlice,
        navbar: navbarSlice,
        contact: contactSlice,
        jazzmin: jazzminSlice,
        landing: landingSlice,
    }
})

export default store;