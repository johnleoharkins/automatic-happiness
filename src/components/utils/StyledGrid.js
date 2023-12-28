import React from "react";
import {styled} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";



const StyledGrid = styled(Grid2)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        maxWidth: '414px',
        boxSizing: 'border-box'
    }
}))

export default StyledGrid;