import React, {useEffect, useState} from "react";
import IconButton from "@mui/material/IconButton";
import {Button, styled, useMediaQuery, useTheme} from "@mui/material";

const PrinciplesYouSvg = ({width, height}) => {
    return (
        <svg width={`${width}px`} height={`${height}px`}  viewBox={`0 0 ${width*3} ${height*3}`} fill="none" xmlns="http://www.w3.org/2000/svg"
             test-id="desktopHeaderLogo" className="inline-block w-auto h-12">
            <path d="M64.7171 27.7279L48.8983 44.4246L33.2959 27.9525L49.1106 11.2598L64.7171 27.7279Z"
                  fill="#E71313"></path>
            <path d="M43.6713 48.9698L28.0566 65.4502L12.25 48.7616L27.8606 32.2812L43.6713 48.9698Z"
                  fill="white"></path>
            <path d="M85.7484 49.2529L70.1378 65.7332L54.3271 49.0487L69.9418 32.5684L85.7484 49.2529Z"
                  fill="white"></path>
            <path d="M64.7171 70.2648L49.1024 86.7451L33.2959 70.0565L48.9065 53.5762L64.7171 70.2648Z"
                  fill="white"></path>
            <g>
                <path
                    d="M102 44.082H110.777L120.193 60.934L129.574 44.082H138.232L124.259 69.8304V87.0194H116.029V69.8304L102 44.082Z"
                    fill="white"></path>
                <path
                    d="M159.233 43C165.307 43 170.531 45.1978 174.906 49.6003C179.28 53.9959 181.464 59.3604 181.464 65.6869C181.464 71.9502 179.308 77.2586 174.997 81.598C170.686 85.9373 165.447 88.107 159.296 88.107C152.851 88.107 147.493 85.8812 143.231 81.4224C138.969 76.9637 136.827 71.6694 136.827 65.5324C136.827 61.4248 137.817 57.6471 139.804 54.2065C141.791 50.7589 144.523 48.0345 147.999 46.0193C151.474 44.0041 155.224 43 159.233 43ZM159.142 50.9976C155.168 50.9976 151.825 52.3809 149.122 55.1404C146.412 57.9069 145.064 61.4178 145.064 65.6799C145.064 70.4265 146.77 74.1831 150.175 76.9496C152.822 79.1123 155.863 80.1866 159.289 80.1866C163.165 80.1866 166.466 78.7823 169.197 75.9806C171.928 73.179 173.291 69.7244 173.291 65.6167C173.291 61.5301 171.914 58.0684 169.169 55.2387C166.423 52.409 163.081 50.9976 159.142 50.9976Z"
                    fill="white"></path>
                <path
                    d="M212.654 44.0812C212.654 44.0812 212.654 58.0894 212.654 68.7553C212.654 80.1865 205.401 80.3129 204.397 80.3129C203.393 80.3129 196.125 80.1865 196.125 68.7553C196.125 58.0964 196.125 44.0812 196.125 44.0812L187.924 44.0742C187.924 44.0742 187.924 58.0613 187.924 65.5745C187.924 73.0876 187.973 88.0999 204.397 88.0999C220.82 88.0999 220.869 73.0876 220.869 65.5745C220.869 58.0613 220.869 44.0742 220.869 44.0742L212.654 44.0812Z"
                    fill="white"></path>
            </g>
            <path
                d="M102 11.538H106.272C108.583 11.538 110.246 11.7561 111.263 12.1924C112.289 12.6189 113.094 13.3169 113.679 14.2863C114.274 15.246 114.571 16.3997 114.571 17.7471C114.571 19.24 114.182 20.4809 113.406 21.4697C112.639 22.4585 111.594 23.1468 110.27 23.5346C109.494 23.7575 108.079 23.869 106.027 23.869V32.9282H102V11.538ZM106.027 19.8992H107.307C108.314 19.8992 109.014 19.8265 109.407 19.6811C109.8 19.5357 110.107 19.2982 110.328 18.9686C110.558 18.6293 110.673 18.2222 110.673 17.7471C110.673 16.9231 110.357 16.3221 109.724 15.944C109.263 15.6629 108.41 15.5223 107.164 15.5223H106.027V19.8992Z"
                fill="#E71313"></path>
            <path
                d="M120.406 11.538H124.678C127.018 11.538 128.681 11.7513 129.669 12.1778C130.666 12.5947 131.467 13.2927 132.071 14.2718C132.675 15.2509 132.977 16.4093 132.977 17.7471C132.977 19.1528 132.641 20.3306 131.97 21.2807C131.309 22.221 130.307 22.9335 128.964 23.4182L133.969 32.9282H129.568L124.807 23.869H124.433V32.9282H120.406V11.538ZM124.433 19.8992H125.699C126.984 19.8992 127.866 19.7296 128.346 19.3903C128.835 19.051 129.079 18.4887 129.079 17.7035C129.079 17.2382 128.959 16.8359 128.72 16.4966C128.48 16.1476 128.159 15.9004 127.756 15.755C127.353 15.5999 126.615 15.5223 125.541 15.5223H124.433V19.8992Z"
                fill="#E71313"></path>
            <path d="M138.539 11.538H142.538V32.9282H138.539V11.538Z" fill="#E71313"></path>
            <path
                d="M148.704 11.538H152.558L161.634 25.614V11.538H165.661V32.9282H161.792L152.731 18.8959V32.9282H148.704V11.538Z"
                fill="#E71313"></path>
            <path
                d="M191.547 15.3042L188.728 18.0234C186.81 15.978 184.653 14.9552 182.255 14.9552C180.232 14.9552 178.525 15.6532 177.135 17.0492C175.754 18.4451 175.064 20.1658 175.064 22.2113C175.064 23.6363 175.371 24.9014 175.984 26.0066C176.598 27.1117 177.466 27.9793 178.588 28.6095C179.71 29.2396 180.956 29.5546 182.327 29.5546C183.497 29.5546 184.566 29.3365 185.535 28.9003C186.503 28.4544 187.567 27.6497 188.728 26.4864L191.461 29.3656C189.898 30.907 188.421 31.9782 187.031 32.5792C185.64 33.1706 184.053 33.4662 182.27 33.4662C178.981 33.4662 176.286 32.4144 174.186 30.3108C172.096 28.1975 171.051 25.4928 171.051 22.1968C171.051 20.064 171.526 18.1688 172.475 16.5111C173.434 14.8534 174.8 13.5205 176.574 12.5123C178.358 11.5041 180.275 11 182.327 11C184.072 11 185.75 11.3732 187.361 12.1197C188.982 12.8661 190.377 13.9276 191.547 15.3042Z"
                fill="#E71313"></path>
            <path d="M196.404 11.538H200.403V32.9282H196.404V11.538Z" fill="#E71313"></path>
            <path
                d="M206.54 11.538H210.812C213.123 11.538 214.786 11.7561 215.803 12.1924C216.829 12.6189 217.634 13.3169 218.219 14.2863C218.814 15.246 219.111 16.3997 219.111 17.7471C219.111 19.24 218.723 20.4809 217.946 21.4697C217.179 22.4585 216.134 23.1468 214.81 23.5346C214.034 23.7575 212.619 23.869 210.567 23.869V32.9282H206.54V11.538ZM210.567 19.8992H211.847C212.854 19.8992 213.554 19.8265 213.947 19.6811C214.34 19.5357 214.647 19.2982 214.868 18.9686C215.098 18.6293 215.213 18.2222 215.213 17.7471C215.213 16.9231 214.897 16.3221 214.264 15.944C213.803 15.6629 212.95 15.5223 211.704 15.5223H210.567V19.8992Z"
                fill="#E71313"></path>
            <path d="M224.673 11.538H228.7V29.0457H234.568V32.9282H224.673V11.538Z" fill="#E71313"></path>
            <path
                d="M239.268 11.538H250.817V15.5223H243.266V19.3903H250.817V23.3019H243.266V28.9294H250.817V32.9282H239.268V11.538Z"
                fill="#E71313"></path>
            <path
                d="M267.282 14.4463L264.304 17.1073C263.259 15.6338 262.195 14.8971 261.111 14.8971C260.584 14.8971 260.152 15.0425 259.817 15.3333C259.481 15.6144 259.313 15.9343 259.313 16.293C259.313 16.6517 259.433 16.991 259.673 17.3109C259.999 17.7374 260.982 18.6535 262.622 20.0592C264.156 21.3582 265.086 22.1774 265.412 22.5167C266.227 23.3504 266.802 24.1501 267.138 24.916C267.483 25.6721 267.656 26.501 267.656 27.4025C267.656 29.1572 267.056 30.6065 265.858 31.7504C264.659 32.8943 263.096 33.4662 261.169 33.4662C259.663 33.4662 258.35 33.093 257.228 32.3466C256.116 31.6001 255.162 30.4271 254.366 28.8276L257.746 26.7627C258.762 28.6531 259.932 29.5983 261.255 29.5983C261.946 29.5983 262.526 29.3947 262.996 28.9875C263.465 28.5804 263.7 28.1102 263.7 27.577C263.7 27.0923 263.523 26.6076 263.168 26.1229C262.813 25.6382 262.032 24.8966 260.824 23.8981C258.522 21.998 257.036 20.5342 256.365 19.5066C255.694 18.4694 255.358 17.4369 255.358 16.4093C255.358 14.9261 255.914 13.6562 257.027 12.5995C258.148 11.5332 259.529 11 261.169 11C262.224 11 263.226 11.2472 264.175 11.7416C265.134 12.236 266.169 13.1376 267.282 14.4463Z"
                fill="#E71313"></path>
            <defs>
                <clipPath id="Theme-Dark-Principles-You-Lockup-Stacked-Full-Color-clip0">
                    <rect width="118.862" height="45.1" fill="white" transform="translate(102 43)"></rect>
                </clipPath>
            </defs>
        </svg>
    )
}
const PrinciplesYouButton = () => {
    // source: https://stackoverflow.com/questions/72826309/get-current-material-ui-breakpoint-name
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const theme = useTheme();
    const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
    const smallToMid = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        if (greaterThanMid) {
            setWidth(100)
            setHeight(50)
            console.log("Greater than mid");
        } else if (smallToMid) {
            setWidth(100)
            setHeight(50)
            console.log("Between small to mid");
        } else if (lessThanSmall) {
            setWidth(100)
            setHeight(50)
            console.log("Less than small");
        }
    }, [width, height])

    const PrinciplesYouHandler = () => {
        window.open("https://principlesyou.com/share/4qrB8HCV86Ka5VI")
    }
    return (
        <StyledPrinciplesYouButton onClick={PrinciplesYouHandler}>
            <StyledPrinciplesYouSvg height={height} width={width} />
        </StyledPrinciplesYouButton>
    )
}

const StyledPrinciplesYouButton = styled(Button)(({theme}) => {
    return ({
        height: '55px',
        width: 'auto',
        display: 'flex',
        placeItems: 'baseline'
    })
})

const StyledPrinciplesYouSvg = styled(PrinciplesYouSvg)(({theme}) => {
    return ({

    })
})
const PrinciplesYou = () => {


    return(
        <PrinciplesYouButton />
    )
}
export default PrinciplesYou;