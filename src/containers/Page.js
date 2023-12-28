import React from "react";
import NavBar from "../components/NavBar";
import classes from './Page.module.css'
import {Container, createTheme, CssBaseline, styled, ThemeProvider} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

// Probably wrong way to do this. Figure out the themeing and whole page container bit later
const StyledPage = styled('div')(({theme}) => {
    return ({
        // backgroundColor: theme.palette.background.default,
        // zIndex: '-500',
        // position: 'relative'
    })
})

export const customTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#e7f1fb',
        },
        secondary: {
            main: '#49e21c',
        },
        background: {
            default: '#121212',
            paper: '#000000',
        },
        error: {
            main: '#f91908',
        },
        text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.7)'
        }
    },
    // typography: {
    //     h4: {color: '#fff'}
    // }
});


const Page = ({children}) => {

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <StyledPage>
                <NavBar />
                {children}
            </StyledPage>
        </ThemeProvider>
    )
}

export default Page;