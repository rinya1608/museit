import React, {forwardRef} from 'react';
import classes from "./FileUploader.module.css";
import Loader from "../common/loader/Loader";

const FileUploaderForm = forwardRef(({blob, isFile, fileName, originalFileName, chooseFile, fileUploadHandler, sendFile, downloadFile, isLoad}, ref) => {



    return (
        <form className={classes.fileUploadForm}>
            {/*{!blob
                ? <div className={classes.fileUploadForm_wrap}>
                    <button className={classes.fileUploadForm_wrap_buttonFile} id={"fileUploadFormInput"}
                            onClick={chooseFile}>Выбрать файл
                    </button>
                    <input className={classes.fileUploadForm_wrap_inputFile} type="file" multiple={false}
                           ref={ref} onChange={fileUploadHandler}/>
                    {
                        isFile ? <button onClick={sendFile} className={classes.fileUploadForm_wrap_buttonDownload}>Загрузить</button> : ''
                    }
                </div>
                : <div className={classes.fileUploadForm_wrap}>
                    <button onClick={downloadFile}>Cкачать</button>
                </div>
            }*/}
            <h1 className={classes.fileUploadForm_title}>Создайте свою мелодию</h1>
            {
                isLoad ?
                    <div className={classes.fileUploadForm_load}><Loader/></div>
                    :
                    <div className={classes.fileUploadForm_wrap}>
                        <div className={classes.fileUploadForm_wrap_left}>
                            <h3 className={classes.fileUploadForm_wrap_left_fileTitle}>{originalFileName ? `Загрузить файл ${originalFileName}` : 'Выбрать файл'}</h3>
                            <div className={classes.fileUploadForm_wrap_left_upload}>
                                <input className={classes.fileUploadForm_wrap_left_upload_inputFile} type="file" multiple={false}
                                       ref={ref} onChange={fileUploadHandler}/>
                                <button className={classes.fileUploadForm_wrap_left_upload_buttonFile} id={"fileUploadFormInput"}
                                        onClick={chooseFile}>
                                    Выбрать файл
                                </button>
                                {
                                    isFile ? <button onClick={sendFile} className={classes.fileUploadForm_wrap_left_upload_buttonUpload}>Загрузить</button> : ''
                                }
                            </div>
                            <h3 className={classes.fileUploadForm_wrap_left_toolTitle}>Выберите инструменты</h3>
                            <div className={classes.fileUploadForm_wrap_left_tools}>
                                <button className={classes.fileUploadForm_wrap_left_autoButton}>
                                    Авто
                                </button>
                                <button className={classes.fileUploadForm_wrap_left_toolButton}>
                                    Инструмент
                                </button>
                            </div>
                        </div>
                        {
                            blob ?
                                <div className={classes.fileUploadForm_wrap_right}>
                                    <h3 className={classes.fileUploadForm_wrap_right_fileName}>{fileName}</h3>
                                    <button onClick={downloadFile} className={classes.fileUploadForm_wrap_right_buttonDownload}>Cкачать</button>
                                </div>
                                : null
                        }
                    </div>
            }

        </form>
    );
});

export default FileUploaderForm;