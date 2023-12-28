import React, {useCallback, useEffect, useRef, useState} from "react";
import Page from "./Page";
import {styled} from "@mui/material";
import classes from './Info.module.css'
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useDispatch, useSelector} from "react-redux";
import {useLoaderData} from "react-router-dom";
import {JazzminActions} from "../store/jazzmin-slice";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import {LandingActions} from "../store/landing-slice";
import Jazzmin from "../components/jazzmin/Jazzmin";





const StyledHeader = styled(Typography)(({theme}) => {
    return ({
        fontFamily: 'futura-pt',
        fontSize: '38px',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: '1em',
        position: 'absolute',
        zIndex: '20',
        margin: '0.75rem',
        padding: '0.5rem',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 0, 0, 0.01)',
        borderRadius: '7px',
        color: '#777',
        letterSpacing: '1px',
        [theme.breakpoints.down('md')]: {
            bottom: 0
        },
        ['&.subheader']: {
            fontSize: '22px',
            fontWeight: '300',
            maxWidth: '30rem',
            width: '100%',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            border: '1px solid rgba(0, 0, 0, 0.01)',
            borderRadius: '7px',
            padding: '0',
            color: 'white',
            [theme.breakpoints.down('md')]: {
                maxWidth:'15rem',
                fontSize: '16px'
            }
        }
    })
})

const Info = () => {
    const {loaded} = useSelector(state => state.jazzmin)
    const dispatch = useDispatch();
    const jazzmin = useLoaderData();

    useEffect(() => {
        dispatch(JazzminActions.setImages(jazzmin))
    }, [])

    useEffect(() => {
        window.onload = () => {
            setTimeout(() => {
                dispatch(JazzminActions.loaded(true));
            }, 5000)
        }
    }, [])

    return (
        <React.Fragment>
            {!loaded ? (
                <LoadingSpinner />
            ) : (
                <Page style={{backgroundColor: '#777 !important'}}>
                    <Jazzmin />
                    <StyledHeader variant={'h1'}>Jazzmin Joy <br />
                        <StyledHeader variant={'body1'} className={'subheader'}>50% German Shepherd Dog<br/><span className={classes.sh}>25% Siberian Husky</span><br/><span className={classes.lr}>25% Labrador Retriever</span></StyledHeader>
                    </StyledHeader>
                </Page>
            )}
        </React.Fragment>

    )
}

export default Info;