import React, {useRef} from 'react';
import classes from './Feedback.module.css'
import localforage from "localforage";
import LocalForageUtils from "../../utils/LocalForageUtils";
import {FeedbackService} from "../../api/FeedbackService";

const FeedbackForm = ({afterSendFunction}) => {
    const name = useRef();
    const contact = useRef();
    const message = useRef();
    const permission = useRef();

    async function sendFeedback(e) {
        e.preventDefault()
        const formData = new FormData();
        let sourceFile = null
        let processedFile = null

        if (LocalForageUtils.elementsValid('sourceFile', 'processedFile') && permission.current.checked) {
            console.log(permission.current.checked)
            sourceFile = await localforage.getItem('sourceFile')
            processedFile = await localforage.getItem('processedFile')
        }
        formData.append('name', name.current.value)
        formData.append('contact', contact.current.value)
        formData.append('message', message.current.value)
        if (permission.current.checked) {
            formData.append('sourceFile', sourceFile)
            formData.append('processedFile', processedFile)
        }
        await FeedbackService.sendFeedback(formData)
        e.target.reset()
        afterSendFunction()
    }

    return (
        <div className={classes.feedback_wrap}>
            <form className={classes.feedback_form} onSubmit={sendFeedback}>
                <div className={classes.feedback_row}><h2>Contact Us</h2></div>
                <div className={classes.feedback_row}><input type={"text"} placeholder={"Имя"} ref={name}
                                                             className={classes.feedback_row_field}/></div>
                <div className={classes.feedback_row}><input type={"text"} placeholder={"E-mail/Телефон"} ref={contact}
                                                             className={classes.feedback_row_field}/></div>
                <div className={classes.feedback_row}><textarea placeholder="Сообщение" ref={message}
                                                                className={classes.feedback_row_field}/></div>
                {
                    LocalForageUtils.elementsValid('sourceFile', 'processedFile') ?
                        <div className={classes.feedback_row}>
                            <input type={"checkbox"} id={"permission_use_checkbox"} ref={permission}
                                   className={classes.feedback_row_checkbox}/>
                            <label htmlFor={"permission_use_checkbox"} className={classes.feedback_row_label}>
                                <div>Разрешить сайту использовать загруженный материал</div>
                            </label>
                        </div>
                        :
                        null
                }
                <button className={classes.feedback_send}>Отправить</button>
            </form>
        </div>
    );
};

export default FeedbackForm;