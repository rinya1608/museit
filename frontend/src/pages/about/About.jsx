import React from 'react';
import classes from "./About.module.css";
import checkIcon from '../../img/icon/check.svg'
import oneNumberIcon from '../../img/icon/one_number.svg'
import twoNumberIcon from '../../img/icon/two_number.svg'
import threeNumberIcon from '../../img/icon/three_number.svg'
import Slider from "../../components/common/slider/Slider";
import SliderElement from "../../components/common/slider/SliderElement";
import Footer from "../../components/footer/Footer";
import FileUploader from "../../components/fileUpload/FileUploader";
import {Box, Container, Typography} from "@material-ui/core";

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

const About = () => {
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
                    <FileUploader/>
                </Container>
            </Box>
            <Box sx={{
                mt: "50px"
            }}>
                <Container>
                    <Typography style={typographyTitleStyle}>
                        Музыканты оставляют отзывы<br/>о нашем приложении
                    </Typography>
                    <Box id={"otzivi"} sx={{
                        mt: "50px"
                    }}>
                        <Slider>
                            <SliderElement title={"Неплохо"} text={"В целом аккомпанемент неплох, есть гармонические огрехи, но их можно тут же исправить во встроенном миди-редакторе, что очень удобно."}/>
                            <SliderElement title={"Общее качество"} text={"Не все песни аранжируются одинаково качественно."}/>
                            <SliderElement title={"Сервис"} text={"Интересный сервис! Радует простой интерфейс и наличие редактора!"}/>
                            <SliderElement title={"Еще бы стилей"} text={"Не хватает стилей аранжировки. Хотелось бы делать каверы для фортепиано."}/>
                        </Slider>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default About;