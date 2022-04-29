import React from 'react';
import classes from "./Header.module.css";
import logo from '../../img/logo.svg';
const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header_wrap}>
                <div className={classes.header_logo}>
                    <a className={classes.header_logo_wrap} href="#">
                        <img src={logo} alt='logo' className={classes.header_logo_wrap_img}/>
                        <div className={classes.header_logo_wrap_title}>
                            MuseIT
                        </div>
                    </a>
                </div>
                <ul className={classes.header_menu}>
                    <li><a href='#aboutProduct'>О продукте</a></li>
                    <li><a href='#team'>Наша команда</a></li>
                    <li><a href='#otziv'>Отзывы</a></li>
                    <li><a href='#what'>Цены</a></li>
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