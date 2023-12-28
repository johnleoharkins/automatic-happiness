import React, {useEffect, useRef, useState} from "react";
import classes from './Landing.module.css'
import Grid2 from "@mui/material/Unstable_Grid2";
import Page from "./Page";
import StyledGrid from "../components/utils/StyledGrid";
import {styled} from "@mui/material";
import Resume from "../components/about/Resume";
import {useLoaderData} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LandingActions} from "../store/landing-slice";

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

const StyledLandscape = styled('div')(({theme, imgSrc, opacity}) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    return ({
        backgroundImage: `url(http://localhost:8080/api/v1/content/c/${imgSrc})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        zIndex: '-100',
        display: 'flex',
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        opacity: opacity,
        transition: 'opacity 1s',
        top: 0,
        [theme.breakpoints.down('md')]: {
            maxHeight: '10rem',
            maxWidth: '30rem'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: `${windowWidth}px`,
            maxHeight: `${windowHeight - 300}px`,
        },
    })
})

const StyledNewvilleHouseImage = styled('div')(({theme, imgSrc}) => {

    return ({
        backgroundImage: `url(http://localhost:8080/api/v1/content/c/${imgSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        width: '100%',
        height: '100%',
    })
})
const StyledNewvilleHouseContainer = styled('div')(({theme}) => {
    return ({
        width: '150px',
        height: '100px',
        display: 'flex'
    })
})

//temp
const StyledGridPlaceHolder = styled(Grid2)(({}) => {
    return ({
        minHeight: '120px'
    })
})

const Landing = () => {
    const {images, activeIndex, opacities} = useSelector(state => state.landing)
    const dispatch = useDispatch();
    const {landscapes, newville} = useLoaderData();

    // Initial Effect
    // Use loader data of filenames for images, dispatch action to update state with the filenames.
    useEffect(() => {
        console.log(landscapes)
        dispatch(LandingActions.setLandscapeImages(landscapes))
        dispatch(LandingActions.setNewvilleImages(newville))
    }, [])
    const gridRef = useRef(null)

    const landscapeImages = images.landscapes.map((ele, index) => {
            return (
                <StyledLandscape imgSrc={ele} key={ele} opacity={opacities[index]} />
            )
        });

    const newvilleHouseImages = images.newville.map((ele) => {
        return (
            <StyledNewvilleHouseContainer key={ele}>
                <StyledNewvilleHouseImage imgSrc={ele} />
            </StyledNewvilleHouseContainer>
        )
    });
    // const landscapeImages = useMemo(() => {
    //     return images.landscapes.map((ele, index) => {
    //         return (
    //             <StyledLandscape imgSrc={ele} key={ele} opacity={landscapeOpacities[index]} />
    //         )
    //     })
    // }, [images.landscapes])
    //
    // const newvilleHouseImages = useMemo(() => images.newville.map((ele) => {
    //     return (
    //         <StyledNewvilleHouseContainer key={ele}>
    //             <StyledNewvilleHouseImage imgSrc={ele} />
    //         </StyledNewvilleHouseContainer>
    //     )
    // }),[images.newville])

    // Should this be useCallback? Probably dont need anymore, handled in styled
    // const handleWindowResize = () => {
    //     const gridWidth = gridRef.current.clientWidth;
    //     const gridHeight = gridRef.current.clientHeight;
    //     dispatch(LandingActions.setMainContentContainer({width: gridWidth, height: gridHeight}))
    // }

    // Window Resize Effect
    // Listens for window resize events and executes handleWindowResize callback
    // Probably don't need anymore, handled in styled
    // useEffect(() => {
        // if(gridRef && gridRef.current) {
        //     window.addEventListener("resize", handleWindowResize)
        //     return () => {
        //         window.removeEventListener("resize", handleWindowResize)
        //     }
        // }
    // }, [handleWindowResize])

    // Active Index Effect
    // Sets a timeout every X seconds to update the active index and corresponding opacities to display the next image
    // useEffect(() => {
    //
    //     setTimeout(() => {
    //         if (activeIndex >= images.landscapes.length -1){
    //             console.log("Setting active index to 0")
    //             dispatch(LandingActions.setOpacities([0, 0, 1]));
    //             dispatch(LandingActions.setActiveIndex(0))
    //         }else {
    //             const nextIndex = activeIndex + 1;
    //             console.log("Setting active index to ", nextIndex)
    //             dispatch(LandingActions.setActiveIndex(nextIndex));
    //             dispatch(LandingActions.setOpacities(opacities.map((ele, i) => {
    //                 if(i === activeIndex){
    //                     return 1
    //                 }else {
    //                     return 0
    //                 }
    //             })))
    //
    //         }
    //     }, 6000)
    // }, [activeIndex, images.landscapes])


    return (
        <Page>
            <div className={classes.cont}>
                {landscapeImages}
            </div>
            <StyledGrid container direction={"row"} ref={gridRef}>
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

                <StyledGridPlaceHolder md={12}></StyledGridPlaceHolder>
                {/*<StyledGridPlaceHolder md={12}></StyledGridPlaceHolder>*/}
                {/*<StyledGridPlaceHolder md={12}></StyledGridPlaceHolder>*/}
                {/*<StyledGridPlaceHolder md={12}></StyledGridPlaceHolder>*/}

                {/*Image line, magnifier*/}
                <Grid2 sm={12} md={12} className={classes.imageLine}>
                    {newvilleHouseImages}
                </Grid2>
            </StyledGrid>

            <div className={classes.resume__container}>
                <Resume />
            </div>
        </Page>
    )
}

export default Landing;