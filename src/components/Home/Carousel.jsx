import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable"; //libreria para utilizar swipe en mobile

import "../../style/Carousel.css";


export const CarouselItem = ({ children, width, img }) => {
    return (
        <div className="carousel-item" style={{ width: width }}> 
            {children}
            
            <img className="carousel-item_IMG" src={`/banner/${img}.webp`} alt="" /> 
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 10000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div
            {...handlers}
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}  >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}


            </div>

<div className="indicator-arrow">
<button className="indicator-arrow_btn" onClick={() => {updateIndex(activeIndex - 1);}}> « </button>
<button className="indicator-arrow_btn" onClick={() => {updateIndex(activeIndex + 1);}}> » </button>
</div>

            <div className="indicators">
                {React.Children.map(children, (child, index) => {
                    return (
                 <button className={`${index === activeIndex ? "active" : ""}`}  onClick={() => {  updateIndex(index);   }}  > 
                    </button>
                    );
                })}
       
             

            </div>
        </div>
    );
};

export default Carousel;
