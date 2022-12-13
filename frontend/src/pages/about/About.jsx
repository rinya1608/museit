import React from 'react';
import Slider from "../../components/common/slider/Slider";
import SliderElement from "../../components/common/slider/SliderElement";
import FileUploader from "../../components/fileUpload/FileUploader";
import {Box, Container, Typography} from "@material-ui/core";
import {Button, List, ListItem, ListItemText} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const typographyTitleStyle = {
    color: "rgba(255, 39, 19, 0.7)",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 700
}

const typographyDescStyle = {
    width: "80%",
    color: "#171616",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    margin: "auto",
    marginTop: "30px"
}

const About = ({user, setUser}) => {
    return (
        <Box sx={{
            width: "100%"
        }}>
            <Container>
                <Box id={"aboutProduct"} sx={{
                    mt: "100px"
                }}>
                    <Typography style={typographyTitleStyle}>
                        Просто и удобно  создать аранжировку  для вашей мелодии
                    </Typography>
                    <Typography style={typographyDescStyle}>
                        MuseIT - это веб-приложение, которое позволяет автоматически генерировать аккомпанемент к мелодии, а также создавать полноценные аранжировки.
                    </Typography>
                </Box>
                <Box sx={{
                    mt: "100px"
                }}>
                    <Typography style={typographyTitleStyle}>
                        Как это работает
                    </Typography>
                    <Typography style={typographyDescStyle}>
                        Создавайте аранжировки,  выбирая набор музыкальных инструментов. Просто загрузите мелодию, выберите инструменты и наслаждайтесь результатом.

                    </Typography>
                </Box>
            </Container>
            <Box id={"algoritm"} sx={{
                background: "linear-gradient(90deg, rgb(245 152 168 / 50%), rgb(246 237 178 /50%))",
                width: "100%",
                mt: "50px"
            }}>
                <Container style={{
                    paddingTop: "50px",
                    paddingBottom: "100px"
                }}>
                    <Typography style={typographyTitleStyle}>
                        Создайте свою мелодию
                    </Typography>
                    <FileUploader user={user}/>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Typography style={typographyTitleStyle}>
                        Получить еще больше возможностей
                    </Typography>
                    <Box>
                        <List style={{
                            display:"flex",
                            flexDirection: "row",
                            width: "80%",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }}>
                            <ListItem >
                                <Box sx={{
                                    border: "solid 1px grey",
                                    height: "500px",
                                    p: "20px",
                                    position: "relative",
                                    flex: "1 1 auto"
                                }}>
                                    <Typography>Стандарт</Typography>
                                    <Typography style={{fontStyle: "bold", fontSize: "20px", fontWeight: 700}}>Бесплатно</Typography>
                                    <List >
                                        <ListItem sx={{p: 0, m: 0}}><CheckIcon/> пункт</ListItem>
                                    </List>
                                    <Button style={{position: "absolute", bottom: 0}}>Создать аккаунт</Button>
                                </Box>
                            </ListItem>
                            <ListItem >
                                <Box sx={{
                                    border: "solid 1px grey",
                                    height: "500px",
                                    p: "20px",
                                    position: "relative",
                                    flex: "1 1 auto"
                                }}>
                                    <Typography>Стандарт</Typography>
                                    <Typography style={{fontStyle: "bold", fontSize: "20px", fontWeight: 700}}>Бесплатно</Typography>
                                    <List >
                                        <ListItem sx={{p: 0, m: 0}}><CheckIcon/> пункт</ListItem>
                                    </List>
                                    <Button style={{position: "absolute", bottom: 0}}>Создать аккаунт</Button>
                                </Box>
                            </ListItem>
                            <ListItem >
                                <Box sx={{
                                    border: "solid 1px grey",
                                    height: "500px",
                                    p: "20px",
                                    position: "relative",
                                    flex: "1 1 auto"
                                }}>
                                    <Typography>Стандарт</Typography>
                                    <Typography style={{fontStyle: "bold", fontSize: "20px", fontWeight: 700}}>Бесплатно</Typography>
                                    <List >
                                        <ListItem sx={{p: 0, m: 0}}><CheckIcon/> пункт</ListItem>
                                    </List>
                                    <Button style={{position: "absolute", bottom: 0}}>Создать аккаунт</Button>
                                </Box>
                            </ListItem>
                        </List>
                    </Box>
                </Container>
            </Box>
            <Box sx={{
                mt: "50px"
            }}>
                <Container>
                    <Typography style={typographyTitleStyle}>
                        Музыканты по всей России<br/> уже воспользовались нашим продуктом
                    </Typography>
                    <Box id={"otzivi"} sx={{
                        mt: "50px"
                    }}>
                        <Slider>
                            <SliderElement/>
                            <SliderElement/>
                            <SliderElement/>
                            <SliderElement/>
                        </Slider>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default About;