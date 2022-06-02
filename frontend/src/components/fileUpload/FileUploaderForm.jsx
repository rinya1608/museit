import React, {forwardRef} from 'react';
import classes from "./FileUploader.module.css";
import "./instrument-select.css"
import Loader from "../common/loader/Loader";
import Select from 'react-select';

const FileUploaderForm = forwardRef(({
                                         blob,
                                         isFile,
                                         downloadFileName,
                                         fileName,
                                         chooseFile,
                                         fileUploadHandler,
                                         sendFile,
                                         downloadFile,
                                         isLoad
                                     }, ref) => {

    const options = [
        {value: 'piano', label: 'Фортепиано'}
    ]


    return (
        <form className={classes.fileUploadForm}>
            <h1 className={classes.fileUploadForm_title}>Создайте свою мелодию</h1>
            {
                isLoad ?
                    <div className={classes.fileUploadForm_load}><Loader/></div>
                    :
                    <div className={classes.fileUploadForm_wrap}>
                        <div className={classes.fileUploadForm_wrap_left}>
                            <h3 className={classes.fileUploadForm_wrap_left_fileTitle}>{fileName ? `Загрузить файл ${fileName}` : 'Выбрать файл(*.mid)'}</h3>
                            <div className={classes.fileUploadForm_wrap_left_upload}>
                                <input className={classes.fileUploadForm_wrap_left_upload_inputFile} type="file"
                                       multiple={false}
                                       ref={ref}
                                       onChange={fileUploadHandler}
                                       accept=".mid"
                                />
                                <button className={classes.fileUploadForm_wrap_left_upload_buttonFile}
                                        id={"fileUploadFormInput"}
                                        onClick={chooseFile}>
                                    {fileName ? 'Выбрать другой файл' : 'Выбрать файл'}
                                </button>
                                {
                                    isFile ? <button onClick={sendFile}
                                                     className={classes.fileUploadForm_wrap_left_upload_buttonUpload}>Загрузить</button> : ''
                                }
                            </div>
                            {fileName ? <h3 className={classes.fileUploadForm_wrap_left_toolTitle}>Выберите инструменты</h3> : null}
                            {
                                fileName ?
                                    <div className={classes.fileUploadForm_wrap_left_tools}>
                                        <Select options={options}
                                                classNamePrefix='instrument_select'
                                                defaultValue={options[0]}
                                                placeholder='Выбрать'
                                        />
                                    </div>
                                : null
                            }
                        </div>
                        {
                            blob ?
                                <div className={classes.fileUploadForm_wrap_right}>
                                    <h3 className={classes.fileUploadForm_wrap_right_fileName}>{downloadFileName}</h3>
                                    <button onClick={downloadFile}
                                            className={classes.fileUploadForm_wrap_right_buttonDownload}>Cкачать
                                    </button>
                                </div>
                                : null
                        }
                    </div>
            }

        </form>
    );
});

export default FileUploaderForm;