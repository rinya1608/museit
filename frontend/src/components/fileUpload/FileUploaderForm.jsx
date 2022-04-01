import React, {forwardRef} from 'react';
import classes from "./FileUploader.module.css";

const FileUploaderForm = forwardRef(({blob, isFile, chooseFile, fileUploadHandler, sendFile, downloadFile}, ref) => {



    return (
        <form className={classes.fileUploadForm}>
            {!blob
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
            }
        </form>
    );
});

export default FileUploaderForm;