import React, {useState} from 'react';
import classes from "./Footer.module.css";
import Modal from "../common/Modal/Modal";
import FeedbackForm from "../feedback/FeedbackForm";
import {Box, Container, Link, List, ListItem, Typography} from "@material-ui/core";
import logo from "../../img/logo.svg";

const Footer = () => {
    const [modalActive, setModalActive] = useState(false)

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
                            }}>
                                Обратная связь
                            </Link>
                        </ListItem>
                        <ListItem style={{
                            whiteSpace: "nowrap"
                        }}>
                            <Modal active={modalActive} setActive={setModalActive}>
                                <FeedbackForm afterSendFunction={() => setModalActive(false)}/>
                            </Modal>
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{
                    width: "100%",
                    height: "70px",
                    background: "linear-gradient(93.69deg, rgba(238, 39, 255, 0.174) 41.23%, rgba(39, 255, 255, 0.246) 52.58%, rgba(39, 255, 255, 0.12) 65.02%)",
                    display: "flex",
                    padding: "auto",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Box sx={{
                        display: "flex",
                        padding: "auto",
                        alignItems: "center"
                    }}>
                        <Box
                            component="img"
                            sx={{
                                height: 40,
                                width: 40,
                            }}
                            alt="logo"
                            src={logo}
                        />
                        <Typography
                            style={{
                                fontFamily: "Montserrat",
                                fontSize: "35px",
                                fontWeight: "900",
                                fontStyle: "Italic",
                                background: "-webkit-linear-gradient(180deg, rgba(24, 75, 255, 0.6) 19.58%, rgba(134, 39, 255, 0.6) 79.48%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                ml: "10px"
                            }}
                        >MuseIT</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;