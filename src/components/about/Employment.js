import React, {useEffect, useRef, useState} from "react";
import classes from "./Resume.module.css";
import Typography from "@mui/material/Typography";
import {
    StyledDates,
    StyledExperience,
    StyledHeader, StyledHeaderTypography,
    StyledHighlights,
    StyledSection,
    StyledSectionTypography
} from "./Resume";
import Grid2 from "@mui/material/Unstable_Grid2";
import {List, ListItem, useTheme} from "@mui/material";


const EmploymentExperience = ({companyName, jobPosition, location, startDate, endDate, highlights}) => {
    const [isVisible, setIsVisible] = useState(false);

    const theme = useTheme();

    const containerRef = useRef(null);
    const isVisibleCallback = (entries) =>  {
        const [ entry ] = entries;
        setIsVisible(entry.isIntersecting)
        // console.log("Entry: ", entry)
        // console.log("isVis: ", isVisible)
        if(entry.isIntersecting) {
            entry.target.classList.add(classes.active)
        }else {
            entry.target.classList.remove(classes.active)
        }

    }

    const options = {
        root: null,
        rootMargin: theme.breakpoints.down('md') ? "-5px" : "-50px",
        threshold: 0.5
    }

    useEffect(() => {
        const observer = new IntersectionObserver(isVisibleCallback, options);
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])

    const empExpHighlights = highlights.map((highlight, index) => {
        return (
            <ListItem sx={{ display: 'list-item' }} key={`${companyName}-highlight-${index}`}>
                <Typography variant={'h6'}>
                    {highlight}
                </Typography>
            </ListItem>
        )
    })

    return(
        <React.Fragment>
            <StyledSection md={12} container direction={'column'} ref={containerRef} transform={isVisible ? 0 : (theme.breakpoints.down('md') ? -2 : -20)} opacity={isVisible ? 1 : 0}>
                <StyledExperience md={12}>
                    <StyledHeader md={8}>
                        <StyledHeaderTypography variant={'h4'}>{jobPosition}</StyledHeaderTypography>
                        <StyledHeaderTypography variant={'h5'}>{companyName} | {location}</StyledHeaderTypography>
                    </StyledHeader>
                    <StyledDates md={4}>
                        <StyledHeaderTypography variant={'subtitle1'}>{startDate} - {endDate}</StyledHeaderTypography>
                    </StyledDates>
                </StyledExperience>
                <StyledHighlights md={8}>
                    <List sx={{ listStyleType: 'disc', pl: 4 }}>
                        {empExpHighlights}
                    </List>
                </StyledHighlights>
            </StyledSection>
        </React.Fragment>
    )
}

const Employment = ({employment}) => {
    const EmploymentExperiences = employment.map((ee) => {
        return (
            <EmploymentExperience key={ee.name}
                                  companyName={ee.name} jobPosition={ee.position} highlights={ee.highlights}
                                  startDate={ee.startDate} endDate={ee.endDate} location={ee.location} />
        )
    })
    return (
        <Grid2 xs={12} md={12}>
            <StyledSectionTypography variant={'h3'}>Employment History</StyledSectionTypography>
            {EmploymentExperiences}
        </Grid2>
    )
}

export default Employment;