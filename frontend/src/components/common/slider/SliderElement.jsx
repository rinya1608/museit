import React, {useState} from 'react';
import classes from "./Slider.module.css";
import quoteIcon from '../../../img/icon/quote.svg'

const SliderElement = ({index, activeElementIndex, title, text}) => {
    let isActive = activeElementIndex === index
    return (

        <div className={`${classes.slider_element} ${isActive ? classes.slider_element_active : ''}`}>
            <div className={classes.slider_element_wrap}>
                <img src={quoteIcon} className={`${classes.slider_element_wrap_quote} ${isActive ? classes.slider_element_wrap_quote_active : ''}`}/>
                <h1 className={`${classes.slider_element_wrap_title} ${isActive ? classes.slider_element_wrap_title_active : ''}`}>{title}</h1>
                <div className={`${classes.slider_element_wrap_text} ${isActive ? classes.slider_element_wrap_text_active : ''}`}>{text}</div>
            </div>
        </div>
    );
};

export default SliderElement;