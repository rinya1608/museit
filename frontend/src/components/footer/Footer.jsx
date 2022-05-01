import React, {useState} from 'react';
import classes from "./Footer.module.css";
import Modal from "../common/Modal/Modal";
import Modal2 from "../common/Modal/Modal";
import FeedbackForm from "../feedback/FeedbackForm";
import RegisterForm from "../register/RegisterForm";

const Footer = () => {
    const [modalActive, setModalActive] = useState(false)
    const [modalActive2, setModalActive2] = useState(false)

    return (
        <div className={classes.footer}>
            <ul className={classes.footer_menu}>
                <li><a href='#'>Согласие на обработку данных</a></li>
                <li><a href='#' onClick={() => setModalActive(true)}>Обратная связь</a></li>
                <li><a href='#'>Согласие на обработку данных</a></li>
                <li><a href='#' onClick={() => setModalActive2(true)}>Регистрация</a></li>
            </ul>
            <Modal active={modalActive} setActive={setModalActive}>
                <FeedbackForm afterSendFunction={() => setModalActive(false)}/>
            </Modal>
            <Modal2 active={modalActive2} setActive={setModalActive2}>
                <RegisterForm afterSendFunction={() => setModalActive2(false)}/>
            </Modal2>
        </div>
    );
};

export default Footer;