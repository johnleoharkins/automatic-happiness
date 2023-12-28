import React, {useEffect, useRef, useState} from "react";
import classes from './Resume.module.css';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    styled, useTheme
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import RESUME from '../../data/about/john_resume'
import Grid2 from "@mui/material/Unstable_Grid2";
import Employment from "./Employment";
import Academics from "./Academics";
import Socials from "./Socials";
import GallupThemesReport from "./GallupThemesReport";



export const StyledExperience = styled(Grid2)(({theme}) => {
    return ({
        // display: 'flex',
        // flexDirection: 'row',
        // margin: '1rem',
        // justifyContent: 'spaceBetween'

        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    })
})

export const StyledHeader = styled(Grid2)(({theme}) => {
    return ({
        display: 'inherit',
        flexDirection: 'column',
        ['.MuiTypography-root']: {
            // backgroundColor: 'rgba(0,0,0,0.66)',
            // boxShadow: '0px 0px 10px rgba(36, 35, 36, 0.8)',
            // backdropFilter: 'blur(1rem)',
            // borderRadius: '1rem',
            // border: 'rgba(39, 185, 245, 0.05) solid 0.01rem',
            // padding: '0.5rem',
            // width: 'fit-content',
        }

    })
})

export const StyledDates = styled(Grid2)(({theme}) => {
    return ({
        display: 'inherit',
        flexDirection: 'row-reverse',
        ['.MuiTypography-root']: {
            // backgroundColor: 'rgba(0,0,0,0.66)',
            // boxShadow: '0px 0px 10px rgba(36, 35, 36, 0.8)',
            // backdropFilter: 'blur(1rem)',
            // borderRadius: '1rem',
            // border: 'rgba(39, 185, 245, 0.05) solid 0.01rem',
            // padding: '0.5rem',
            // width: 'fit-content',
            // height: 'fit-content'
        },

    })
})

export const StyledHighlights = styled(Grid2)(({theme}) => {
    return ({
        // backgroundColor: 'rgba(0,0,0,0.66)',
        // boxShadow: '0px 0px 10px rgba(36, 35, 36, 0.8)',
        marginLeft: '1.5rem',
        // backdropFilter: 'blur(1rem)',
        // borderRadius: '1rem',
        // border: 'rgba(39, 185, 245, 0.05) solid 0.01rem',
        // padding: '1.5rem'
    })
})

export const StyledSection = styled(Grid2)(({theme, transform, opacity}) => {
    return ({
        // color: 'black',
        // width: '100%',
        // height: 'auto',
        opacity: `${opacity}`,
        transform: `translateX(${transform}rem)`,
        transition: 'transform 0.5s, opacity 1s',
        backgroundColor: 'rgba(0,0,0,0.66)',
        boxShadow: '0px 0px 10px rgba(36, 35, 36, 0.8)',
        backdropFilter: 'blur(1rem)',
        borderRadius: '1rem',
        border: 'rgba(39, 185, 245, 0.05) solid 0.01rem',
        width: 'fit-content',
        height: 'fit-content',
        padding: '0.5rem',
        // padding: '1rem !important',
        marginTop: '0.45rem',
        marginBottom: '0.15rem',
    })
})

export const StyledSectionTypography = styled(Typography)(({theme}) => {
    return({
        // backgroundColor: 'rgba(0,0,0,0.66)',
        // boxShadow: '0px 0px 10px rgba(36, 35, 36, 0.8)',
        // backdropFilter: 'blur(1rem)',
        // borderRadius: '1rem',
        // border: 'rgba(39, 185, 245, 0.05) solid 0.01rem',
        // width: 'fit-content',
        // height: 'fit-content',
        // padding: '1.5rem'
    })
})

const StyledResumeContainer = styled(Grid2)(({theme}) => {
    return ({
        margin: '1rem'
    })
})

export const StyledHeaderTypography = styled(Typography)(({theme}) => {
    return ({
        // padding: '1rem !important',
        // marginTop: '0.15rem !important',
        // marginBottom: '0.15rem !important',
    })
})

const Resume = ({sm, md}) => {
    const universityEdu = RESUME.education[0];
    const theme = useTheme()
    return (
        <StyledResumeContainer sm={sm} md={md} container rowSpacing={theme.breakpoints.down('md') ? '1rem' : '25px'} columnSpacing={'25px'} >
            <Socials />
            <Academics institution={universityEdu.institution} startDate={universityEdu.startDate}
                       endDate={universityEdu.endDate} area={universityEdu.area} score={universityEdu.score}
                       studyType={universityEdu.studyType} url={universityEdu.url} />
            <Employment employment={RESUME.work}/>
        </StyledResumeContainer>
    )
}

export default React.memo(Resume);