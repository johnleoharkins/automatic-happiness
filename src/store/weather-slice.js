import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    location: {
        latitude: -88.9573,
        longitude: 43.1178,
        name: "Lake Mills",
        googlePlaceId: '',
        locationKey: ''
    },
    current: {
        temperature: 44.51,
        minimumTemperature: 42.87,
        maximumTemperature: 46.45,
        description: "broken clouds",
        windDegrees: 0,
        windSpeed: 0,
        lastUpdate: ''
    },
    fiveDayForecast: [],
    hourlyForecast: []
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        locationUpdated(state, action) {

        },
        weatherUpdated(state, action) {
            state.current = action.payload.current;
            state.location = action.payload.location;
            state.hourlyForecast = action.payload.hourlyForecast;
            state.fiveDayForecast = action.payload.fiveDayForecast;
        }
    }
})


export const WeatherActions = weatherSlice.actions;
export default weatherSlice.reducer;