import React, {useEffect} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {styled} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useLoaderData} from "react-router-dom";
import {LandingActions} from "../../store/landing-slice";

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

    })
})

const StyledImagesContainer = styled('div')(({theme}) => {
    return ({
        display: 'flex',
        flexDirection: 'row'
    })
})

const NewvilleLine = () => {
    const {images} = useSelector(state => state.landing)
    const dispatch = useDispatch();
    const {newville} = useLoaderData();

    // Initial Effect
    // Use loader data of filenames for images, dispatch action to update state with the filenames.
    useEffect(() => {
        dispatch(LandingActions.setNewvilleImages(newville))
    }, [])


    const newvilleHouseImages = images.newville.map((ele) => {
        return (
            <StyledNewvilleHouseContainer key={ele}>
                <StyledNewvilleHouseImage imgSrc={ele} />
            </StyledNewvilleHouseContainer>
        )
    });

    return (
        <Grid2 sm={12} md={12} >
            <StyledImagesContainer>
                {newvilleHouseImages}
            </StyledImagesContainer>
        </Grid2>
    )
}

export default React.memo(NewvilleLine);