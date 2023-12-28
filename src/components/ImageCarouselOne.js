import React, {useEffect, useRef, useState} from "react";
import classes from "../containers/Info.module.css";

const ImageCarousel = () => {
    const imagesSrcArray = ["jazz1.HEIC.jpg",
        "jazz2.HEIC.jpg","jazz3.HEIC.jpg","jazz4.HEIC.jpg"]

    const containerRef = useRef(null);

    let styledImages = imagesSrcArray.map((imgSrc, index) => {
        let ele = (
            <StyledImage id={"jazzmin-"+index}  key={"jazzminImage_"+index}  imgSrc={imgSrc} />
        )
        return ele
    })

    const [counter, setCounter] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)
    const [images, setImages] = useState()

    useEffect(() => {
        console.log("useEffect init the images")
        if(containerRef.current){

            let imgs = Array.from(containerRef.current.children);
            setImages(imgs)
            // const numImages = styledImages.length;
            // let numClasses;
            //
            // if (numImages % 2 == 0) {
            //     numClasses = (numImages / 2) + 1
            // }else {
            //     numClasses = Math.ceil(numImages / 2)
            // }
            //
            //
            // let images = Array.from(containerRef.current.children);
            // let element = images.shift();
            // images.push(element);
            //
            //
            //
            // images.map((childEle, index) => {
            //
            //     if (index !== 0){
            //         let classNum = Math.ceil(index / 2) + 1
            //         childEle.classList.add(`ci-${classNum}`)
            //     }else{
            //         let classNum = 1
            //         childEle.classList.add(`ci-${classNum}`)
            //     }
            //
            //
            // })
            handleClassAssignmentIncrement()
        }
    }, [])

    const handleClassAssignmentIncrement = () => {
        console.log("increment the images")
        if(containerRef.current && images){
            const numImages = styledImages.length;
            let numClasses;

            if (numImages % 2 == 0) {
                numClasses = (numImages / 2) + 1
            }else {
                numClasses = Math.ceil(numImages / 2)
            }


            // let images = Array.from(containerRef.current.children);
            let imgs = images
            let element = imgs.shift();
            imgs = [...imgs, element]
            console.log(imgs)

            const vals = imgs.map((childEle, index) => {
                // console.log(Array.from(classes['ci_1']))
                if (index !== 0){
                    let classNum = Math.ceil(index / 2) + 1

                    childEle.classList.remove(classes[`ci_${classNum + 1}`]);
                    childEle.classList.add(classes[`ci_${classNum}`])
                }else{
                    let classNum = 1
                    childEle.classList.remove(classes[`ci_${classNum + 1}`]);
                    childEle.classList.add(classes[`ci_${classNum}`])
                }
                return childEle


            })
            console.log(vals)
            setImages(vals)
        }

    }
    const handleClassAssignmentDecrement = () => {
        console.log("useEffect init the imgs")
        if(containerRef.current){
            const numImages = styledImages.length;
            let numClasses;

            if (numImages % 2 == 0) {
                numClasses = (numImages / 2) + 1
            }else {
                numClasses = Math.ceil(numImages / 2)
            }


            let images = Array.from(containerRef.current.children);
            let element = images.pop();
            images = [element, ...images];



            images.map((childEle, index) => {
                if (index !== 0){
                    let classNum = Math.ceil(index / 2) + 1
                    childEle.classList.remove(`ci-${classNum - 1}`);
                    childEle.classList.add(`ci-${classNum}`)
                }else{
                    let classNum = 1
                    childEle.classList.remove(`ci-${classNum - 1}`);
                    childEle.classList.add(`ci-${classNum}`)
                }


            })
        }
    }

    // const applyCarouselImageClasses = useCallback(()=> {
    //     console.log("useEffect init the images")
    //     if(containerRef.current){
    //         const numImages = styledImages.length;
    //         let numClasses;
    //
    //         if (numImages % 2 == 0) {
    //             numClasses = (numImages / 2) + 1
    //         }else {
    //             numClasses = Math.ceil(numImages / 2)
    //         }
    //         let count = Math.abs(numClasses - activeIndex) + 1;
    //
    //         let images = Array.from(containerRef.current.children);
    //         images.map((childEle, index) => {
    //             if (index >= numClasses){
    //                 count--;
    //                 childEle.classList.add(`ci-${count}`)
    //             }else{
    //                 count++;
    //                 childEle.classList.add(`ci-${count}`)
    //             }
    //         })
    //     }
    // }, [activeIndex])


    const handleCounter = () => {
        setCounter(count => count + 1)
    }
    console.log("the count: ", counter)

    const handleIncrementActiveIndex = () => {
        if(activeIndex === styledImages.length - 1){
            setActiveIndex(0);
        }else{
            setActiveIndex(activeIndex => activeIndex + 1)
        }
        styledImages = handleClassAssignmentIncrement()
    }

    return (
        <React.Fragment>
            <div className={classes.container} ref={containerRef}>
                {styledImages}
            </div>
            <div>
                <button onClick={handleIncrementActiveIndex}>Increment Active Index</button>
            </div>

        </React.Fragment>
    )
}

