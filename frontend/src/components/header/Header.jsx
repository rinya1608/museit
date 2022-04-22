import React from 'react';
import classes from "./Header.module.css";
import logo from '../../img/logo.svg';
const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header_wrap}>
                <div className={classes.header_logo}>
                    <img src={logo} alt='logo' className={classes.header_logo_img}/>
                    <div className={classes.header_logo_title}>
                        MuseIT
                    </div>
                </div>
                <ul className={classes.header_menu}>
                    <li>О продукте</li>
                    <li>Наша команда</li>
                    <li>Отзывы</li>
                    <li>Цены</li>
                </ul>
                <div className={classes.header_auth}>
                    <ul>
                        <li>Вход</li>
                        <li>Регистрация</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;