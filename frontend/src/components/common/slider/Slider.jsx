import React, {Children, useEffect, useRef, useState} from 'react';
import classes from "./Slider.module.css";
import arrowIcon from '../../../img/icon/arrow.svg'

const Slider = ({children}) => {
    const [elements,setElements] = useState([])
    const [offset, setOffset] = useState(0)
    const [activeElementIndex,setActiveElementIndex] = useState(Math.floor(children.length / 2)-1)
    const elementsRef = useRef()


    function handlerClickLeft(){
        let width = elementsRef.current.clientWidth
        if (activeElementIndex === 0){
            setActiveElementIndex(elements.length - 1)
            setOffset(offset - width + width / elements.length)
        }
        else{
            setActiveElementIndex(activeElementIndex - 1)
            setOffset(offset + width / elements.length)
        }


    }

    function handlerClickRight(){
        let width = elementsRef.current.clientWidth
        if (activeElementIndex === elements.length - 1){
            setActiveElementIndex(0)
            setOffset(offset + width - width / elements.length)
        }
        else{
            setActiveElementIndex(activeElementIndex + 1)
            setOffset(offset - width / elements.length)
        }
    }


    useEffect(() => {
        setElements(Children.map(children,(child, i) => {
            return React.cloneElement(child,{index : i,activeElementIndex: activeElementIndex})
        }))

    },[activeElementIndex])

    return (
        <div className={classes.slider}>
            <div className={classes.slider_window}>
                <div className={classes.slider_window_elements} ref={elementsRef} style={{
                    transform: `translateX(${offset}px)`
                }}>
                    {elements}
                </div>
            </div>
            <div className={classes.slider_panel}>
                <div className={classes.slider_panel_left} onClick={handlerClickLeft}><img src={arrowIcon}/></div>
                <div className={classes.slider_panel_right} onClick={handlerClickRight}><img src={arrowIcon}/></div>
            </div>
        </div>
    );
};

export default Slider;