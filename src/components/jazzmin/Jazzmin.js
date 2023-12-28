import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useRef} from "react";
import {JazzminActions} from "../../store/jazzmin-slice";
import {styled} from "@mui/material";

const StyledImage = styled('img')(({theme, imgSrc, opacity}) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    // console.log(`window height: ${windowHeight}, window width: ${windowWidth}`)

    return ({
        backgroundImage: `url(/jazzminPhotos/${imgSrc})`,
        backgroundRepeat: 'no-repeat',
        opacity: opacity,
        width: '100%',
        height: '100%',
        display: 'flex',
        top: 0,
        position: 'absolute',
        backgroundSize: 'cover',
        // backgroundPositionY: 'center',
        backgroundPositionX: 'center',
        backgroundPositionY: '35%',
        zIndex: -100,
        transition: 'opacity 0.5s'
    })
})

const StyledContainer = styled('div')(({theme}) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    return ({
        // position: 'absolute',
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        display: 'flex'
    })
})
const Jazzmin = () => {
    const {images, activeIndex, opacities} = useSelector(state => state.jazzmin)
    const dispatch = useDispatch();
    const containerRef = useRef(null)

    const styledImages = images.map((imgSrc, index) => {
        let ele = (
            <StyledImage id={"jazzmin-"+index}  key={"jazzminImage_"+index}  imgSrc={imgSrc} opacity={opacities[index]} />
        )
        return ele
    })

    useEffect(() => {
        setTimeout(() => {
            if (activeIndex >= images.length -1){
                dispatch(JazzminActions.setOpacities([0, 0, 0, 1]));
                dispatch(JazzminActions.setActiveIndex(0));
            }else {
                dispatch(JazzminActions.setOpacities(opacities.map((ele, i) => {
                    if(i === activeIndex){
                        return 1
                    }else {
                        return 0
                    }
                })))
                dispatch(JazzminActions.setActiveIndex(activeIndex + 1));
            }
        }, 5000)

    }, [activeIndex, images])
    return (
        <StyledContainer ref={containerRef}>
            {styledImages}
        </StyledContainer>
    )
}


export default Jazzmin;