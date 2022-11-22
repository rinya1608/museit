import React, {useEffect, useRef, useState} from 'react';
import localforage from "localforage";
import LocalForageUtils from "../../utils/LocalForageUtils";
import {FeedbackService} from "../../api/FeedbackService";
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    TextField,
    Typography
} from "@material-ui/core";

const FeedbackForm = ({openDialog, setOpenDialog}) => {
    const name = useRef();
    const contact = useRef();
    const message = useRef();
    const permission = useRef();
    const [valid, setValid] = useState(false)

    useEffect(() => {
        LocalForageUtils.elementsValid('sourceFile', 'processedFile')
            .then(flag => setValid(flag))
    }, [])

    async function sendFeedback(e) {
        e.preventDefault()
        const formData = new FormData();
        let sourceFile = null
        let processedFile = null

        if (valid && permission.current.checked) {
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
        setOpenDialog(false)
    }

    return (
        /*<div className={classes.feedback_wrap}>
            <form className={classes.feedback_form} onSubmit={sendFeedback}>
                <div className={classes.feedback_row}><h2>Contact Us</h2></div>
                <div className={classes.feedback_row}><input type={"text"} placeholder={"Имя"} ref={name}
                                                             className={classes.feedback_row_field}/></div>
                <div className={classes.feedback_row}><input type={"text"} placeholder={"E-mail/Телефон"} ref={contact}
                                                             className={classes.feedback_row_field}/></div>
                <div className={classes.feedback_row}><textarea placeholder="Сообщение" ref={message}
                                                                className={classes.feedback_row_field}/></div>
                {
                     valid ? <div className={classes.feedback_row}>
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
        </div>*/
        <Dialog open={openDialog} onClose={() => setOpenDialog(!openDialog)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" style={{
                color: "rgba(23, 22, 22, 0.6)",
                textAlign: "center"
            }}>Обратная связь</DialogTitle>
            <DialogContent style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "450px"
            }}>
                <TextField
                    autoFocus
                    inputRef={name}
                    margin="dense"
                    id="name"
                    label="Имя"
                    type="text"
                    variant="filled"
                    style={{
                        width: "80%",
                        marginTop: "30px"
                    }}
                />
                <TextField
                    autoFocus
                    inputRef={contact}
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    variant="filled"
                    style={{
                        width: "80%",
                        marginTop: "30px"
                    }}
                />
                <TextField
                    autoFocus
                    multiline
                    inputRef={message}
                    rows={4}
                    margin="dense"
                    id="message"
                    label="Сообщение"
                    type="text"
                    variant="filled"
                    style={{
                        width: "80%",
                        marginTop: "30px"
                    }}
                />
            </DialogContent>
            <DialogActions style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "100px"
            }}>
                {
                    valid ? <Box sx={{
                            width: "74%"
                        }}>
                            <FormControlLabel control={<Checkbox name="checked" inputRef={permission} style={{
                                color: "rgba(23, 22, 22, 0.6)"
                            }}/>} label={<Typography style={{
                                fontSize: "12px"
                            }}>Разрешить сайту использовать загруженный материал</Typography>}/>
                        </Box>
                        :
                        null
                }

                <Button onClick={sendFeedback} style={{
                    background: "rgb(255 39 119 / 50%)",
                    boxShadow: "none",
                    width: "75%",
                    height: "50px",
                    fontStyle: "normal",
                    fontWeight: 800,
                    color: "white",
                    marginTop: "10px"
                }}>
                    Отправить
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FeedbackForm;