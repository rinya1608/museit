import React from 'react';
import classes from './Modal.module.css';

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? [classes.modal, classes.active].join(' ') : classes.modal}
             onClick={() => setActive(false)}>
            <div className={active ? [classes.modal_content, classes.active].join(' ') : classes.modal_content}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;