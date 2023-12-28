import React, {useEffect, useState} from "react";
import classes from './WeatherWidget.module.css'
import {useDispatch, useSelector} from "react-redux";
import * as WEATHER_DATA from '../../data/weatherData.json'
import {Box, styled} from "@mui/material";
import Leaf from "./Leaf";
import {ReactSVG} from "react-svg";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import StyledGrid from "../utils/StyledGrid";
import {WeatherActions} from "../../store/weather-slice";
import {useLoaderData} from "react-router-dom";

import {getFunctions, httpsCallable} from 'firebase/functions'
import {FirebaseApp} from "../../App";
const firebaseWeather = async () => {
    // const functions = getFunctions(FirebaseApp);
    // const functions = getFunctions();
    // const updateWeather = httpsCallable(functions, 'getWeather');
    // let weatherData = await updateWeather().then((result) => {
    //     const data = result;
    //     console.log("weather result ", data);
    //     return data;
    // })


    const fetchInit = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        // mode: 'no-cors',
        // cache: 'no-cache',
        // referrerPolicy: 'no-referrer'
    };
    const res = await fetch(`https://getweather-3dmdumm6ia-uc.a.run.app/`, fetchInit).then((data) => {
        // console.log("response", data)
        return data;
    }).catch((err) => console.log("error", err));
    const weatherData = await res.json();
    console.log("weather data", weatherData)
    return weatherData;


}


const fetchWeather = async (city) => {
    const fetchInit = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        cache: 'no-cache',
        referrerPolicy: 'no-referrer'
    };
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=43.1178&lon=-88.9573&appid=0d3c85d44caec6a146dac4eb25c14e73`, fetchInit);
    // const json = await res.json();
    console.log(res, res.json())
    return res;

}


const StyledWeatherContainer = styled(Grid2)(({theme}) => {
    return ({
        boxSizing: 'border-box',
        margin: '1rem',
        [theme.breakpoints.down('md')]: {
            margin: '.3em'
        },

    })
})

const WeatherLocation = styled(Grid2)(({theme}) => {
    return ({
        boxSizing: 'border-box'
    })
})

const LocationName = styled('div')(({ theme }) => ({
    ...theme.typography.h2,
    fontSize: '1.2em',
    display: 'flex',
    boxSizing: 'border-box',
    placeContent: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '1em'
    }
}));

const StyledWeatherInfo= styled(Grid2)(({theme}) => {
    return ({
        boxSizing: 'border-box',
        [theme.breakpoints.up('md')]: {
            padding: '0.25em'
        }
    })
})

const StyledCurrentTemp = styled(Typography)(({theme, fontSize}) => {
    return ({
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        // height: '100%',
        fontSize: '1.2rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1em'
        },
        [theme.breakpoints.up('md')]: {
            padding: '0.25em'
        }
    })
})

const StyledMinMaxTemp = styled(Typography)(({theme, fontSize}) => {
    return ({
        // display: 'flex',
        // flexDirection: 'column-reverse',
        // alignItems: 'flexStart',
        boxSizing: 'border-box',
        width: '100%',
        height: 'auto',
        // padding: '0.2rem',
        // margin: '0.3rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '0.7em'
        }
    })
})

const StyledTempRange = styled(Grid2)(({theme}) => {
    return ({
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column-reverse',
        // height: '100%',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '.3em'
        },
        [theme.breakpoints.up('md')]: {
            padding: '0.25em'
        }
    })
})


const WeatherWidget = () => {
    // console.log("weather resopnse: ", WEATHER_DATA)
    const {location, current} = useSelector(state => state.weather)
    const dispatch = useDispatch();
    // const {weather} = useLoaderData();

    useEffect(() => {
        firebaseWeather().then((data) => {
            dispatch(WeatherActions.weatherUpdated(data))
        })

        // console.log(weather)
        // fetchWeather("lake mills").then((data) => {
        //     console.log("Fetch Weather resolved successfully...\n", data)
        //     let currTemp = data.weather[0].temp;
        //     console.log(currTemp);
        //     // if (data) {
        //     //     dispatch(WeatherActions.weatherUpdated(data))
        //     // }
        // })
    }, [])

    return(
            <StyledWeatherContainer xs={4} md={2} container direction={'row'}>
                <WeatherLocation xs={12}>
                    <LocationName>{location.name}</LocationName>
                </WeatherLocation>
                <StyledWeatherInfo xs={12} container direction={'row'}>
                    <StyledCurrentTemp xs={6} variant={'body2'}>{current.temperature}{'\u2109'}</StyledCurrentTemp>
                    <StyledTempRange xs={6}>
                        <StyledMinMaxTemp variant={'body2'}>L:{current.minimumTemperature}{'\u2109'}</StyledMinMaxTemp>
                        <StyledMinMaxTemp variant={'body2'}>H:{current.maximumTemperature}{'\u2109'}</StyledMinMaxTemp>
                    </StyledTempRange>
                </StyledWeatherInfo>
            </StyledWeatherContainer>
    )
}

export default WeatherWidget;