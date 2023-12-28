import React, {useEffect, useState} from "react";
import {styled} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useLoaderData} from "react-router-dom";
import {LandingActions} from "../../store/landing-slice";
import {Style} from "@mui/icons-material";


const StyledLandscape = styled('img')(({theme, imgSrc, opacity, onLoad}) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    return ({
        backgroundImage: `url(/landscapePhotos/${imgSrc})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        // width: 'auto',
        height: '100%',
        // height: 'auto',
        zIndex: '-100',
        display: 'flex',
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        opacity: opacity,
        transition: 'opacity 1s',
        top: 0,
        [theme.breakpoints.down('md')]: {
            maxHeight: '25rem',
            maxWidth: '30rem'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: `${windowWidth}px`,
            // maxHeight: `${windowHeight - 300}px`,
            maxHeight: '49em',
            backgroundPositionY: '50%'
        },
    })
})

const StyledLandscapeContainer = styled('div')(({theme}) => {
    return ({
        display: 'flex',
        // maxHeight: '28em',
    })
})



const Landscape = () => {

    const {images, activeIndex, opacities} = useSelector(state => state.landing)
    const dispatch = useDispatch();

    const landscapeImages = images.landscapes.map((ele, index) => {

        return (
            <StyledLandscape imgSrc={ele} key={ele} opacity={opacities[index]} />
        )
    });

    // Initial Effect
    // Use loader data of filenames for images, dispatch action to update state with the filenames.
    useEffect(() => {
        // console.log(landscapes)
        // window.onload = () => {
        //     dispatch(LandingActions.loaded(false));
        // }
    }, [])



    // Active Index Effect
    // Sets a timeout every X seconds to update the active index and corresponding opacities to display the next image
    useEffect(() => {

        setTimeout(() => {
            if (activeIndex >= images.landscapes.length -1){
                // console.log("Setting active index to 0")
                dispatch(LandingActions.setOpacities([0, 0, 1]));
                dispatch(LandingActions.setActiveIndex(0))
            }else {
                const nextIndex = activeIndex + 1;
                // console.log("Setting active index to ", nextIndex)
                dispatch(LandingActions.setActiveIndex(nextIndex));
                dispatch(LandingActions.setOpacities(opacities.map((ele, i) => {
                    if(i === activeIndex){
                        return 1
                    }else {
                        return 0
                    }
                })))

            }
        }, 6000)
    }, [activeIndex, images.landscapes])

    return (
        <StyledLandscapeContainer>
            {landscapeImages}
        </StyledLandscapeContainer>
    )
}

export default Landscape;