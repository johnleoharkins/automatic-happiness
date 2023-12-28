import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import classes from "../../containers/Landing.module.css";
import {styled} from "@mui/material";

const StyledParagraph = styled("div")(({theme}) => {
    return ({
        backdropFilter: 'blur(10px)',
        maxWidth: '20rem',
        maxHeight: '3rem',
        padding: '0.5em',
        margin: '0.1em',
        width: '100%',
        textAlign: 'center',

        [theme.breakpoints.down('md')]: {
            position: 'relative',
            left: '15%',
        },
        [theme.breakpoints.up('md')]: {
            left: '45%',
            position: 'relative',
        },

    })
})

const StyledName = styled("div")(({theme}) => {
    return ({
        display: 'flex',
        flexDirection: 'row',
        minHeight: '50px',
        width: '100%',
        height: '100px',
        margin: '0.1em',
        // backdropFilter: 'blur(10px)',
        justifyContent: 'center',

        [theme.breakpoints.down('md')]: {
            maxWidth: '20rem',
            position: 'relative',
            left: '15%',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '25rem',
            position: 'relative',
            left: '55%',
        }
    })
})

const Name = () => {
    return (
        <Grid2 sm={8} md={8} container direction={'column'} >
            <Grid2 sm={12}>
                <StyledName>
                    <span className={classes.name_typography}>John Harkins</span>
                </StyledName>
            </Grid2>
            <Grid2 sm={12} >
                <StyledParagraph id={'paragraph-1'}>
                    I am a web developer from Madison, Wisconsin.
                </StyledParagraph>
            </Grid2>
        </Grid2>
    )
}

export default Name;