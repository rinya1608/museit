import React, {useState} from 'react';
import classes from "./Header.module.css";
import logo from '../../img/logo.svg';
import Modal from "../common/Modal/Modal";
import RegisterForm from "../register/RegisterForm";
import LoginForm from "../register/LoginForm";

const Header = () => {
    const [modalActive1, setModalActive1] = useState(false)
    const [modalActive2, setModalActive2] = useState(false)

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
                        <li><a href='#' onClick={() => setModalActive1(true)}>Вход</a></li>
                        <li><a href='#' onClick={() => setModalActive2(true)}>Регистрация</a></li>
                    </ul>
                    <Modal active={modalActive1} setActive={setModalActive1}>
                        <LoginForm afterSendFunction={() => setModalActive1(false)}/>
                    </Modal>
                    <Modal active={modalActive2} setActive={setModalActive2}>
                        <RegisterForm/>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Header;