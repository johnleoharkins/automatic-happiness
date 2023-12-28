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



const StyledImage = styled('img')(({theme, imgSrc, opacity}) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    // console.log(`window height: ${windowHeight}, window width: ${windowWidth}`)

    return ({
        backgroundImage: `url(/jazzminPhotos/${imgSrc})`,
        backgroundRepeat: 'no-repeat',
        opacity: opacity,
        width: '100%',
        height: '100%',
        display: 'flex',
        top: 0,
        position: 'absolute',
        backgroundSize: 'cover',
        // backgroundPositionY: 'center',
        backgroundPositionX: 'center',
        backgroundPositionY: '35%',
        zIndex: -100,
        transition: 'opacity 0.5s'
    })
})

const StyledContainer = styled('div')(({theme}) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    return ({
        // position: 'absolute',
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        display: 'flex'
    })
})

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
    const {images, activeIndex, opacities, loaded} = useSelector(state => state.jazzmin)
    const dispatch = useDispatch();
    const jazzmin = useLoaderData();
    const containerRef = useRef(null)

    // const cacheImages = async (srcArray) => {
    //     const promises = await srcArray.map((src) => {
    //         return new Promise(function (resolve, reject){
    //             const img = new Image();
    //             img.src = `jazzminPhotos/${src}`;
    //             img.onload = resolve();
    //             img.onerror = reject();
    //         })
    //     })
    //
    //     await Promise.all(promises);
    //     dispatch(JazzminActions.loaded(true));
    // }

    useEffect(() => {
        dispatch(JazzminActions.setImages(jazzmin))
        // cacheImages(jazzmin)
    }, [])
    useEffect(() => {
        window.onload = () => {
            setTimeout(() => {
                dispatch(JazzminActions.loaded(true));
            }, 5000)
        }
    }, [images])

    const styledImages = images.map((imgSrc, index) => {
        let ele = (
            <StyledImage id={"jazzmin-"+index}  key={"jazzminImage_"+index}  imgSrc={imgSrc} opacity={opacities[index]} />
        )
        return ele
    })

    const slide =() => {
        if (activeIndex >= images.length -1){
            dispatch(JazzminActions.setOpacities([0, 0, 0, 1]));
            dispatch(JazzminActions.setActiveIndex(0));
        }else {
            dispatch(JazzminActions.setOpacities(opacities.map((ele, i) => {
                if(i === activeIndex){
                    return 1
                }else {
                    return 0
                }
            })))
            dispatch(JazzminActions.setActiveIndex(activeIndex + 1));
        }
    }

    const handleNext = () => {
        slide();
    }

    useEffect(() => {
        setTimeout(() => {
            if (activeIndex >= images.length -1){
                dispatch(JazzminActions.setOpacities([0, 0, 0, 1]));
                dispatch(JazzminActions.setActiveIndex(0));
            }else {
                dispatch(JazzminActions.setOpacities(opacities.map((ele, i) => {
                    if(i === activeIndex){
                        return 1
                    }else {
                        return 0
                    }
                })))
                dispatch(JazzminActions.setActiveIndex(activeIndex + 1));
            }
        }, 6000)

    }, [activeIndex, images])

    return (
        <React.Fragment>
            {!loaded ? (
                <LoadingSpinner />
            ) : (
                <Page style={{backgroundColor: '#777 !important'}}>
                    {/*idk*/}
                    {/*<StyledContainer ref={containerRef} onClick={handleNext}>*/}
                    <StyledContainer ref={containerRef}>
                        {styledImages}
                    </StyledContainer>
                    <StyledHeader variant={'h1'}>Jazzmin Joy <br />
                        <StyledHeader variant={'body1'} className={'subheader'}>50% German Shepherd Dog<br/><span className={classes.sh}>25% Siberian Husky</span><br/><span className={classes.lr}>25% Labrador Retriever</span></StyledHeader>
                    </StyledHeader>
                </Page>
            )}
        </React.Fragment>

    )
}

export default Info;