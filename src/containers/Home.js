import React, {useEffect} from "react";
import Page from "./Page";
import StyledGrid from "../components/utils/StyledGrid";
import Landscape from "../components/landing/Landscape";
import Resume from "../components/about/Resume";
import Name from "../components/landing/Name";
import NewvilleLine from "../components/landing/NewvilleLine";
import {styled} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import PrinciplesYou from "../components/about/PrinciplesYou";
import Socials from "../components/about/Socials";
import {useDispatch, useSelector} from "react-redux";
import classes from './Home.module.css'
import {LandingActions} from "../store/landing-slice";
import {useLoaderData} from "react-router-dom";

const StyledGridPlaceHolder = styled(Grid2)(({theme}) => {
    return ({
        minHeight: '120px',
        [theme.breakpoints.down('md')]: {
            minHeight: '1.5rem'
        }
    })
})

const Home = () => {
    const {loaded, images} = useSelector(state => state.landing);
    const dispatch = useDispatch();
    const {landscapes} = useLoaderData();
    const cacheImages = async (srcArray) => {
        const promises = await srcArray.map((src) => {
            return new Promise(function (resolve, reject){
                const img = new Image();
                img.src = `/landscapePhotos/${src}`;
                img.onload = resolve();
                img.onerror = reject();
            })
        })

        await Promise.all(promises).then((val) => console.log("resolved.", val)).catch((rej) => console.log("rejected"));
        dispatch(LandingActions.loaded(true));
    }
    useEffect(() => {
        dispatch(LandingActions.setLandscapeImages(landscapes))
        // // if(images.length > 0){
        //     cacheImages(landscapes)
        // // }
    }, [])
    useEffect(() => {
        if(images.landscapes.length > 0 && !loaded){
            cacheImages(landscapes)
        }
    },[images])

    return(
        <React.Fragment>
            {!loaded ? (
                <div className={`${classes.sp} ${classes.spHydrogen}`}>
                </div>
            ) : (
                <Page>
                    <Landscape />
                    <StyledGrid container direction={"row"}>
                        <Name />

                        <StyledGridPlaceHolder xs={12} md={12}></StyledGridPlaceHolder>
                        <StyledGridPlaceHolder xs={12} md={12}></StyledGridPlaceHolder>
                        <StyledGridPlaceHolder xs={12} md={12}></StyledGridPlaceHolder>
                        <StyledGridPlaceHolder xs={12} md={12}></StyledGridPlaceHolder>

                        {/*Kills the performance... */}
                        {/*<NewvilleLine />*/}

                        <Resume sm={12} md={12} />
                    </StyledGrid>

                </Page>
            )}
        </React.Fragment>


    )
}

export default Home;