import React, {useEffect, useRef} from 'react';
import classes from "./Header.module.css";
import logo from '../../img/logo.svg';
import {
    AppBar,
    Box,
    Button, Checkbox,
    Container,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle, FormControlLabel,
    Link,
    List,
    ListItem, TextField,
    Typography
} from "@material-ui/core";
import AuthService from "../../api/AuthService";
import localforage from "localforage";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {IconButton, Menu, MenuItem} from "@mui/material";


const Header = ({user, setUser}) => {

    const [openAuthDialog, setOpenAuthDialog] = React.useState(false);

    const logout = () => {
        AuthService.logout()
        setUser(null)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    const handleClickOpenAuthDialog = () => {
        setOpenAuthDialog(true);
    };

    const handleCloseAuthDialog = () => {
        setOpenAuthDialog(false);
    };

    const [openRegDialog, setOpenRegDialog] = React.useState(false);

    const handleClickOpenRegDialog = () => {
        setOpenRegDialog(true);
    };

    const handleCloseRegDialog = () => {
        setOpenRegDialog(false);
    };

    const emailRef = useRef()
    const passwordRef = useRef()

    const regEmailRef = useRef()
    const regNameRef = useRef()
    const regPasswordRef = useRef()
    const regConfirmPasswordRef = useRef()

    const register = () => {
        AuthService.register(regEmailRef.current.value, regNameRef.current.value, regPasswordRef.current.value, regConfirmPasswordRef.current.value)
        handleCloseRegDialog()
    }

    const login = () => {
        AuthService.login(emailRef.current.value, passwordRef.current.value)
            .then(u => {
                localforage.setItem("token", u.data.accessToken)
                localforage.setItem("refreshToken", u.data.refreshToken)
                localforage.setItem("user", u.data.user)
                setUser(u.data.user)
            })
        handleCloseAuthDialog()
        handleClose()
    }


    const listItemStyle = {
        color: "rgba(23, 22, 22, 0.6)",
        fontSize: "20px",
        marginRight: "30px"
    }

    const listItemStyleBold = {
        fontWeight: "bold"
    }

    return (
        <Box sx={{
            background: "linear-gradient(90deg, #f598a8, #f6edb2)",
            height: "90vh",
            width: "100%",
            position: "relative"
        }}>
            <Container>
                <Box sx={{
                    display: "flex",
                    width: "100%",
                    mt: "40px"
                }}>
                    <Box sx={{
                        display: "flex",
                        padding: "auto",
                        alignItems: "center",
                        justifyContent: "center"
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
                    <List style={{
                        display: 'flex',
                        marginLeft: "auto"

                    }}>
                        <ListItem>
                            <Link href={"#aboutProduct"} style={listItemStyle}>
                                О&nbsp;продукте
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href={"#otzivi"} style={listItemStyle}>
                                Отзывы
                            </Link>
                        </ListItem>
                        {
                            user == null ? <ListItem>
                                    <ListItem>
                                        <Button onClick={handleClickOpenAuthDialog}>
                                            <Typography style={
                                                {
                                                    fontWeight: "bold",
                                                    textTransform: "none",
                                                    color: "rgba(23, 22, 22, 0.6)",
                                                    fontSize: "20px",
                                                }
                                            }>
                                                Вход
                                            </Typography>
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                        <Button onClick={handleClickOpenRegDialog}>
                                            <Typography style={
                                                {
                                                    fontWeight: "bold",
                                                    textTransform: "none",
                                                    color: "rgba(23, 22, 22, 0.6)",
                                                    fontSize: "20px",
                                                }
                                            }>
                                                Регистрация
                                            </Typography>
                                        </Button>
                                    </ListItem>
                                </ListItem>
                                :
                                <Box>
                                    <IconButton
                                        size="large"
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-haspopup="true"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        onClick={handleClick}
                                        style={{color: "rgba(23, 22, 22, 0.6)"}}
                                    >
                                        <AccountCircleIcon style={{width: "37px", height: "37px"}}/>
                                    </IconButton>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Инфо</MenuItem>
                                        <MenuItem onClick={logout}>Выйти</MenuItem>
                                    </Menu>
                                </Box>
                        }
                    </List>
                </Box>
                <Box sx={{
                    position: "absolute",
                    top: "40%",
                    right: 0,
                    left: 0,
                    margin: "auto"
                }}>
                    <Typography
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "80px",
                            fontWeight: "900",
                            fontStyle: "Italic",
                            background: "-webkit-linear-gradient(180deg, rgba(24, 75, 255, 0.5) 30.58%, rgba(134, 39, 255, 0.5) 60.48%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >MuseIT</Typography>
                    <Typography style={{
                        fontFamily: "Montserrat",
                        color: "rgba(32, 31, 31, 0.6)",
                        fontSize: "50px",
                        fontStyle: "italic",
                        fontWeight: 800,
                        mt: "50px"
                    }}>
                        Ваш музыкальный помощник
                    </Typography>
                    <Box sx={{
                        mt: "50px"
                    }}>
                        <Button href={"#algoritm"} variant="contained" style={{
                            background: "rgb(255 39 119 / 50%)",
                            boxShadow: "none",
                            width: "300px",
                            height: "50px",
                            fontStyle: "normal",
                            fontWeight: 800,
                            color: "white"
                        }}>Создай свою мелодию</Button>

                    </Box>
                </Box>
            </Container>
            <Dialog open={openAuthDialog} onClose={handleCloseAuthDialog} aria-labelledby="form-dialog-title" style={{
                paddingTop: "100px"
            }}>
                <DialogTitle id="form-dialog-title" style={{
                    color: "rgba(23, 22, 22, 0.6)",
                    textAlign: "center"
                }}>Вход</DialogTitle>
                <DialogContent style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <DialogContentText>
                        Введите свой email и пароль, что бы войти.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        inputRef={emailRef}
                        margin="dense"
                        id="name"
                        label="Email"
                        type="email"
                        variant="filled"
                        style={{
                            width: "80%",
                            marginTop: "30px"
                        }}
                    />
                    <TextField
                        inputRef={passwordRef}
                        margin="dense"
                        id="password"
                        label="Пароль"
                        type="password"
                        variant="filled"
                        style={{
                            width: "80%"
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
                    <Button onClick={login} style={{
                        background: "rgb(255 39 119 / 50%)",
                        boxShadow: "none",
                        width: "74%",
                        height: "50px",
                        fontStyle: "normal",
                        fontWeight: 800,
                        color: "white"
                    }}>
                        Вход
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openRegDialog} onClose={handleCloseRegDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" style={{
                    color: "rgba(23, 22, 22, 0.6)",
                    textAlign: "center"
                }}>Регистрация</DialogTitle>
                <DialogContent style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "450px"
                }}>
                    <TextField
                        autoFocus
                        inputRef={regEmailRef}
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
                        inputRef={regNameRef}
                        margin="dense"
                        id="name"
                        label="Имя"
                        type="text"
                        variant="filled"
                        style={{
                            width: "80%"
                        }}
                    />
                    <TextField
                        inputRef={regPasswordRef}
                        margin="dense"
                        id="password"
                        label="Пароль"
                        type="password"
                        variant="filled"
                        style={{
                            width: "80%"
                        }}
                    />
                    <TextField
                        inputRef={regConfirmPasswordRef}
                        margin="dense"
                        id="confirmPassword"
                        label="Пароль еще раз"
                        type="password"
                        variant="filled"
                        style={{
                            width: "80%"
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
                    <Box sx={{
                        width: "74%"
                    }}>
                        <FormControlLabel control={<Checkbox name="checked" style={{
                            color: "rgba(23, 22, 22, 0.6)"
                        }}/>} label={<Typography style={{
                            fontSize: "12px"
                        }}>Согласие на обработку персональных данных</Typography>}/>
                    </Box>
                    <Button onClick={register} style={{
                        background: "rgb(255 39 119 / 50%)",
                        boxShadow: "none",
                        width: "74%",
                        height: "50px",
                        fontStyle: "normal",
                        fontWeight: 800,
                        color: "white",
                        marginTop: "10px"
                    }}>
                        Зарегистрироваться
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Header;