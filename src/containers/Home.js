import React, {useEffect} from "react";
import Page from "./Page";
import StyledGrid from "../components/utils/StyledGrid";
import Landscape from "../components/landing/Landscape";
import Resume from "../components/about/Resume";
import Name from "../components/landing/Name";
import {styled} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useDispatch, useSelector} from "react-redux";
import {LandingActions} from "../store/landing-slice";
import {useLoaderData} from "react-router-dom";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";

const StyledGridPlaceHolder = styled(Grid2)(({theme}) => {
    return ({
        // minHeight: '120px',
        // minHeight: '7em',
        height: '7em',
        [theme.breakpoints.down('md')]: {
            // minHeight: '1.5rem',
            height: '1.7em'
        }
    })
})

const Home = () => {
    const {loaded, images} = useSelector(state => state.landing);
    const dispatch = useDispatch();
    const {landscapes} = useLoaderData();

    useEffect(() => {
        dispatch(LandingActions.setLandscapeImages(landscapes))
    }, [])
    useEffect(() => {

        window.onload = () => {
            setTimeout(() => {
                dispatch(LandingActions.loaded(true));
            }, 2000)
        }
    },[])

    return(
        <React.Fragment>
            {!loaded ? (
                <LoadingSpinner />

            ) : (
                <Page>
                    <Landscape />
                    <StyledGrid container direction={"row"}>
                        <Name />

                        <StyledGridPlaceHolder xs={12} md={12}></StyledGridPlaceHolder>
                        <StyledGridPlaceHolder xs={12} md={12}></StyledGridPlaceHolder>
                        <StyledGridPlaceHolder xs={12} md={12}></StyledGridPlaceHolder>
                        <StyledGridPlaceHolder xs={12} md={12}></StyledGridPlaceHolder>

                        <Resume sm={12} md={12} />
                    </StyledGrid>

                </Page>
            )}
        </React.Fragment>


    )
}

export default Home;