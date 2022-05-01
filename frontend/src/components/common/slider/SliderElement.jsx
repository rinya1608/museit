import React, {useState} from 'react';
import classes from "./Slider.module.css";
import quoteIcon from '../../../img/icon/quote.svg'

const SliderElement = ({index, activeElementIndex}) => {
    let isActive = activeElementIndex === index
    return (

        <div className={`${classes.slider_element} ${isActive ? classes.slider_element_active : ''}`}>
            <div className={classes.slider_element_wrap}>
                <img src={quoteIcon} className={`${classes.slider_element_wrap_quote} ${isActive ? classes.slider_element_wrap_quote_active : ''}`}/>
                <h1 className={`${classes.slider_element_wrap_title} ${isActive ? classes.slider_element_wrap_title_active : ''}`}>«Лучшую фразу из отзыва напишите в заголовке»</h1>
                <div className={`${classes.slider_element_wrap_text} ${isActive ? classes.slider_element_wrap_text_active : ''}`}>«Вставьте отзыв целиком или часть отзыва клиента. Никогда не выдумывайте отзывы самостоятельно. Фильшивые отзывы всегда видно. Будьте честны.
                    Опишите конечный результат, который получил человек после работы с вами. Что конеретно ему это дало. Можно описывать результат в цифрах, чтобы была конкретика»</div>
            </div>
        </div>
    );
};

export default SliderElement;