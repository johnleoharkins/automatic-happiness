import React from "react";
import {Button, styled} from "@mui/material";

const StyledLogo = styled('img')(({theme}) => {
    return ({
        height: '2rem',
        width: 'auto',
        [theme.breakpoints.down('md')]: {
            height: '1.2rem'
        }
    })
})

const SocialLinkButton = ({logoSource, linkURI}) => {

    const handleLink = () => {
        window.open(linkURI);
    }

    return (
        <Button onClick={handleLink}>
            <StyledLogo src={logoSource} />
        </Button>
    )
}

export default SocialLinkButton;