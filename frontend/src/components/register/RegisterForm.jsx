import React, {useEffect, useRef, useState} from 'react';
import classes from './Register.module.css'
import localforage from "localforage";
import LocalForageUtils from "../../utils/LocalForageUtils";
import {RegisterService} from "../../api/RegisterService";

const FeedbackForm = () => {
    const login = useRef();
    const password = useRef();
    let answer;
    

    async function sendFeedback(e) {
        e.preventDefault()
        
        const formData = new FormData()
        const logintype = 0
        
        formData.append('username', login.current.value)
        formData.append('password', password.current.value)
        formData.append('logintype', logintype)
        
        answer = await RegisterService.sendFeedback(formData)
        document.getElementById("requestmsg").innerHTML = answer
        console.log(answer)
        e.target.reset()

    }

    
    return (
        <div className={classes.feedback_wrap}>
            <form className={classes.feedback_form} onSubmit={sendFeedback}>
                <div className={classes.feedback_row}><h2>Регистрация</h2></div>
                <div className={classes.feedback_row}><input type={"text"} placeholder={"Логин"} ref={login}
                                                             className={classes.feedback_row_field}/></div>
                <div className={classes.feedback_row}><input type={"text"} placeholder={"Пароль"} ref={password}
                                                             className={classes.feedback_row_field}/></div>

                <div><div id="requestmsg" style={{color:`#8b0000`}}></div></div>
                <button className={classes.feedback_send}>Зарегистрироваться</button>
            </form>
        </div>
    );

    
};

export default FeedbackForm;