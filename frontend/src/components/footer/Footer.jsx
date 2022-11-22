import React, {useState} from 'react';
import classes from "./Footer.module.css";
import Modal from "../common/Modal/Modal";
import FeedbackForm from "../feedback/FeedbackForm";
import {Box, Container, Link, List, ListItem, Typography} from "@material-ui/core";
import logo from "../../img/logo.svg";

const Footer = () => {
    const [modalActive, setModalActive] = useState(false)

    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        /*<div className={classes.footer}>
            <ul className={classes.footer_menu}>
                <li><a href='#'>Согласие на обработку данных</a></li>
                <li><a href='#' onClick={() => setModalActive(true)}>Обратная связь</a></li>
                <li><a href='#'>Политика конфиденциальности</a></li>
            </ul>
            <Modal active={modalActive} setActive={setModalActive}>
                <FeedbackForm afterSendFunction={() => setModalActive(false)}/>
            </Modal>
        </div>*/
        <Box sx={{
            width: "100%"
        }}>
            <Container>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <List style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <ListItem style={{
                            whiteSpace: "nowrap"
                        }}>
                            <Link href={"#"} style={{
                                color: "rgba(23, 22, 22, 0.6)",
                                marginLeft: 0
                            }}>
                                Политика конфиденциальности
                            </Link>
                            <Link href={"#"} style={{
                                color: "rgba(23, 22, 22, 0.6)",
                                marginLeft: "10px"
                            }} onClick={handleClickOpenDialog}>
                                Обратная связь
                            </Link>
                        </ListItem>
                        <ListItem style={{
                            whiteSpace: "nowrap"
                        }}>
                            <FeedbackForm openDialog={openDialog} setOpenDialog={setOpenDialog}/>
                        </ListItem>
                    </List>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;