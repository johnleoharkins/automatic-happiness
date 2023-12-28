import React from "react";
import PrinciplesYou from "./PrinciplesYou";
import LinkedInLogo from '../../assets/LinkedIn-Logos/LI-In-Bug.png'
import GithubLogo from '../../assets/github-mark/github-mark-white.png'
import CliftonStrengthsLogo from '../../assets/cliftonstrengthsLogo.png'
import SocialLinkButton from "./SocialLinkButton";
import {styled} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const StyledSocials = styled(Grid2)(({theme}) => {
    return ({
        display: 'flex',
        flexDirection: 'row',
        backdropFilter: 'blur(10px)',
        maxWidth: 'fit-content'
    })
})

const Socials = () => {

    const linkedIn = 'https://www.linkedin.com/in/johnleoharkins/';
    const github = 'https://github.com/johnleoharkins';
    const cliftonStrengths = '/JLHGallupReportSignatureThemes.pdf';
    return (
        <StyledSocials xs={12} md={12}>
            <PrinciplesYou />
            <SocialLinkButton logoSource={LinkedInLogo} linkURI={linkedIn} />
            <SocialLinkButton logoSource={GithubLogo} linkURI={github} />
            <SocialLinkButton logoSource={CliftonStrengthsLogo} linkURI={cliftonStrengths} />
        </StyledSocials>
    )
}

export default Socials;