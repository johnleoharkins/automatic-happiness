import classes from "./LoadingSpinner.module.css";
import React from "react";

const LoadingSpinner = () => {
    return (
        <div className={`${classes.loadingScreen}`}>
            <div className={`${classes.loadingSpinner}`}>
                <div className={`${classes.sp} ${classes.spHydrogen}`}></div>
            </div>
        </div>
    )
}

export default LoadingSpinner;