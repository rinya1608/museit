import React from 'react';
import classes from "./About.module.css";
import checkIcon from '../../img/icon/check.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const About = () => {
    return (
        <div className={classes.about}>
            <div className={classes.about_top}>
                <div className={classes.about_top_text}>
                    Museit<br/>Ваш музыкальный<br/>помощник
                </div>
            </div>
            <div className={classes.about_make}>
                <div className={classes.about_make_left}>
                    <h1 className={classes.about_make_left_title}>
                        Просто и удобно  создать аранжировку  для вашей мелодии
                    </h1>
                    <span className={classes.about_make_left_text}>
                        Создавайте аранжировки,  выбирая набор музыкальных инструментов. Просто загрузите мелодию, выберите инструменты и наслаждайтесь результатом.

                    </span>
                    <button className={classes.about_make_left_button}>
                        Создайте свою аранжировку
                    </button>
                </div>
                <div className={classes.about_make_right}/>
            </div>
            <div className={classes.about_why}>
                <h1 className={classes.about_why_title}>
                   Мы с вами...
                </h1>
                <ul className={classes.about_why_list}>
                    <li className={classes.about_why_list_el}>
                        <img src={checkIcon} className={classes.about_why_list_el_icon}/>
                        <span className={classes.about_why_list_el_text}>Когда нужны новые идеи и больше инструментов</span>
                    </li>
                    <li className={classes.about_why_list_el}>
                        <img src={checkIcon} className={classes.about_why_list_el_icon}/>
                        <span className={classes.about_why_list_el_text}>Где и когда удобно</span>
                    </li>
                    <li className={classes.about_why_list_el}>
                        <img src={checkIcon} className={classes.about_why_list_el_icon}/>
                        <span className={classes.about_why_list_el_text}>Если Вы любитель или профессионал</span>
                    </li>
                </ul>
                <div className={classes.about_why_images}>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
            <div className={classes.about_what}>
                <div className={classes.about_what_wrap}>
                    <div className={classes.about_what_wrap_form}>
                        <div className={classes.about_what_wrap_form_title}><h1>Введите номер телефона или E-mail для регистрации</h1></div>
                        <input type='text' placeholder='E-mail'/>
                        <input type='password' placeholder='Пароль'/>
                        <button>Регистрация</button>
                        <div className={classes.about_what_wrap_form_checkbox}><input type='checkbox'/></div>
                    </div>
                    <div className={classes.about_what_wrap_desc}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;