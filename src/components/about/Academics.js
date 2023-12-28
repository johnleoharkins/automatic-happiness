import React, {useEffect, useRef, useState} from "react";
import Typography from "@mui/material/Typography";
import RESUME from "../../data/about/john_resume";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItem,
    ListItemText,
    ListSubheader, styled, useTheme
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    StyledDates,
    StyledExperience,
    StyledHeader, StyledHeaderTypography,
    StyledHighlights,
    StyledSection,
    StyledSectionTypography
} from "./Resume";
import Grid2 from "@mui/material/Unstable_Grid2";

const Courses = ({isVisible}) => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    useEffect(() => {
        if(!isVisible){
            setExpanded(false)
        }
    }, [isVisible, expanded])

    const universityEdu = RESUME.education[0];

    const courses = universityEdu.courses.map((courseSet) => {
        return (
            <CoursesAccordion key={courseSet.type} type={courseSet.type} courses={courseSet.courseList} handleChange={handleChange} expanded={expanded} />
        )
    })

    return(
        <React.Fragment>
            {courses}
        </React.Fragment>
    )

}
const StyledLists = styled('div')(({theme}) => {
    return ({
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row',
            // width: '100%',
            justifyContent: 'space-between',
            width: '-webkit-fill-available',
        }
    })
})

const StyledListItem = styled(ListItem)(({theme}) => {
    return ({
        justifyContent: 'space-between',
        width: '100%',

    })
})
const StyledListItemText = styled(ListItemText)(({theme}) => {
    return ({
        textAlignLast: 'end'
    })
})
const CoursesAccordion = ({courses, type, handleChange, expanded}) => {
    const theme = useTheme();
    const coursesList = courses.map((course) => {
        return (
            <StyledListItem key={course.name}>
                <ListItemText primary={`${course.name}`} secondary={`${course.description}`} />
                <StyledListItemText>{course.year}</StyledListItemText>
            </StyledListItem>
        )
    })
    const cl1 = courses.slice(Math.ceil(coursesList.length/2)).map((course) => {
        return (
            <StyledListItem key={course.name}>
                <ListItemText primary={`${course.name}`} secondary={`${course.description}`} />
                <StyledListItemText>{course.year}</StyledListItemText>
            </StyledListItem>
        )
    })
    const cl2 = courses.slice(0, Math.ceil(coursesList.length/2)).map((course) => {
        return (
            <StyledListItem key={course.name}>
                <ListItemText primary={`${course.name}`} secondary={`${course.description}`} />
                <StyledListItemText>{course.year}</StyledListItemText>
            </StyledListItem>
        )
    })

    return (
        <React.Fragment>
            <Accordion expanded={expanded === type} onChange={handleChange(type)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <Typography sx={{width: '33%', flexShrink: 0}}>{type}</Typography>
                    <Typography sx={{ color: 'text.secondary' }}></Typography>
                </AccordionSummary>
                <AccordionDetails>
                        <StyledLists>
                            <List>{cl1}</List>
                            <List>{cl2}</List>
                        </StyledLists>
                </AccordionDetails>
            </Accordion>
        </React.Fragment>
    )
}

const Academics = ({institution, url, area, studyType, startDate, endDate, score}) => {
    const [isVisible, setIsVisible] = useState(false);

    const containerRef = useRef(null);
    const theme = useTheme()

    const isVisibleCallback = (entries) =>  {
        const [ entry ] = entries;
        setIsVisible(entry.isIntersecting)
        if(entry.isIntersecting) {
            // entry.target.classList.add(classes.active)
        }else {
            // entry.target.classList.remove(classes.active)
        }

    }

    const options = {
        root: null,
        rootMargin: `25px`,
        threshold: 0.2
    }

    useEffect(() => {
        const observer = new IntersectionObserver(isVisibleCallback, options);
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])


    return (
        <Grid2 sm={12} md={12}>
            <StyledSectionTypography variant={'h3'}>Academics</StyledSectionTypography>
            <StyledSection md={12} container direction={'column'} ref={containerRef} transform={isVisible ? 0 : -20} opacity={isVisible ? 1 : 0} >
                <StyledExperience md={12}>
                    <StyledHeader xs={12} md={8} >
                        <StyledHeaderTypography variant={'h4'}>{institution}</StyledHeaderTypography>
                        <StyledHeaderTypography variant={'h5'}>{area} {studyType}</StyledHeaderTypography>
                    </StyledHeader>
                    <StyledDates xs={12} md={4}>
                        <StyledHeaderTypography variant={'subtitle1'}>{startDate} - {endDate}</StyledHeaderTypography>
                    </StyledDates>
                </StyledExperience>
                <StyledHighlights sm={12} md={8}>
                    <Courses isVisible={isVisible} />
                </StyledHighlights>
            </StyledSection>
        </Grid2>
    )
}

export default Academics;