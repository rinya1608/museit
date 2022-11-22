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
    color: "rgb(255 39 119 / 50%)",
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
        /*<div className={classes.about}>
            <div className={classes.about_top}>
                <div className={classes.about_top_text}>
                    MuseIT<br/>Ваш музыкальный<br/>помощник
                </div>
            </div>
            <a name='aboutProduct'></a>
            <div className={classes.about_make}>
                <div className={classes.about_make_left}>
                    <h1 className={classes.about_make_left_title}>
                        Просто и удобно создать аранжировку для вашей мелодии
                    </h1>
                    <span className={classes.about_make_left_text}>
                        MuseIT - это веб-приложение, которое позволяет автоматически генерировать аккомпанемент к мелодии, а также создавать полноценные аранжировки.
<br/>Создавайте аранжировки,  выбирая набор музыкальных инструментов. Просто загрузите мелодию, выберите инструменты и наслаждайтесь результатом.


                    </span>
                    {<button className={classes.about_make_left_button}>
                        <a href='#fileUpload'>Создайте свою аранжировку</a>
                    </button>}
                </div>
                <div className={classes.about_make_right}/>
            </div>
            <a name='instruction'></a>
            <div className={classes.about_instruction}>
                <h1 className={classes.about_instruction_title}>Как пользоваться нашим сервисом:</h1>
                <div className={classes.about_instruction_wrap}>

                    Исходная мелодия должна быть одноголосой (состоять из одной дорожки) и представлена в виде файла с расширением .mid
                    Для создания такого файла можно воспользоваться бесплатным приложением <a href="https://musescore.org/ru">musescore</a><br/>
                    <ul>
                        <li> <img src={oneNumberIcon}/><span>Созданный файл загружаем в наше приложение</span></li>
                        <li><img src={twoNumberIcon}/><span>Скачиваем результат</span></li>
                        <li><img src={threeNumberIcon}/><span>Читаем его с помощью <a href="https://musescore.org/ru">musescore</a></span></li>
                    </ul>
                </div>
            </div>
            <a name='fileUpload'></a>
            <FileUploader/>
            <div className={classes.about_why}>
                <h1 className={classes.about_why_title}>
                    Мы с вами...
                </h1>
                <ul className={classes.about_why_list}>
                    <li className={classes.about_why_list_el}>
                        <img src={checkIcon} className={classes.about_why_list_el_icon}/>
                        <span
                            className={classes.about_why_list_el_text}>Когда нужны новые идеи и больше инструментов</span>
                    </li>
                    <li className={classes.about_why_list_el}>
                        <img src={checkIcon} className={classes.about_why_list_el_icon}/>
                        <span className={classes.about_why_list_el_text}>Где и когда удобно</span>
                    </li>
                    <li className={classes.about_why_list_el}>
                        <img src={checkIcon} className={classes.about_why_list_el_icon}/>
                        <span className={classes.about_why_list_el_text}>Если Вы любитель или профессионал</span>
                    </li>
                </ul>
                <div className={classes.about_why_images}>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>

            {/!*<a name='what'></a>
            <div className={classes.about_what}>
                <div className={classes.about_what_form}>
                    <div className={classes.about_what_form_title}><h1>Введите номер телефона или E-mail для регистрации</h1></div>
                    <div className={classes.about_what_form_input}><img src={phoneIcon}/><img src={emailIcon}/><input type='text' placeholder='Номер телефона или E-mail'/></div>
                    <div className={classes.about_what_form_input}><img src={lockIcon}/><input type='password' placeholder='Пароль'/></div>

                    <button>Регистрация</button>
                    <div className={classes.about_what_form_checkbox}><input type='checkbox'/><span>Соглашаюсь с <a href='#'>условиями передачи данных</a></span></div>
                </div>
                <div className={classes.about_what_desc}>
                    <div className={classes.about_what_desc_label}><span>ПОДПИСКА</span></div>
                    <h1 className={classes.about_what_desc_title}>Что Вы получите покупая подписку?</h1>
                    <span className={classes.about_what_desc_text}>Вам доступен весь список инструментов, что позволит воплотить любую вашу идею</span>
                    <ul className={classes.about_what_desc_tariffs}>
                        <li><img src={calendarIcon}/><span>На год – скидка 40% на оплату в месяц</span></li>
                        <li><img src={calendarIcon}/><span>На полгода – скидка 25% на оплату в месяц</span></li>
                        <li><img src={calendarIcon}/><span>3 месяца – скидка 10% на оплату в месяц</span></li>
                        <li><img src={calendarIcon}/><span>На месяц - </span></li>
                    </ul>
                </div>
            </div>*!/}
            <a name='team'></a>
            <div className={classes.about_team}>
                <h1>Наша команда</h1>
                <table>
                    <tbody>
                    <tr>
                        <td></td>
                        <td>Фархитдинов Виталий<br/>ML разработчик</td>
                        <td></td>
                        <td>Маслов Антон<br/>Backend разработчик</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Яруллин Ренат<br/>Web разработчик</td>
                        <td></td>
                        <td>Вершинина Надежда<br/>Аналитик</td>
                        <td></td>
                        <td>Гербут Алексей<br/>Системный архитектор</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <a name='otziv'></a>
            <Slider>
                <SliderElement/>
                <SliderElement/>
                <SliderElement/>
                <SliderElement/>
            </Slider>
            <Footer/>
        </div>*/
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