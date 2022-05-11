import React, {useState} from 'react';
import classes from "./Footer.module.css";
import Modal from "../common/Modal/Modal";
import FeedbackForm from "../feedback/FeedbackForm";

const Footer = () => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className={classes.footer}>
            <ul className={classes.footer_menu}>
                <li><a href='#'>Согласие на обработку данных</a></li>
                <li><a href='#' onClick={() => setModalActive(true)}>Обратная связь</a></li>
            </ul>
            <Modal active={modalActive} setActive={setModalActive}>
                <FeedbackForm afterSendFunction={() => setModalActive(false)}/>
            </Modal>
        </div>
    );
};

export default Footer;