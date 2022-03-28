import React, {useState} from 'react';
import './Form.css';
import FileUtils from "../../../utils/FileUtils";

const FileUploadForm = React.forwardRef((props, ref) => {

    const [isFile, setIsFile] = useState(false);
    const [fileName, setFileName] = useState("");

    const allowedFileType = ['mid']

    function fileUploadHandler(e) {
        setIsFile(false);
        let fileName = e.target.files[0].name;
        if (!FileUtils.isAllowedFileType(fileName, allowedFileType)){
            e.target.value = null;
            setFileName("Файл с таким типом недопустим.");
        }
        else{
            setIsFile(true);
            setFileName(fileName);
        }
    }

    function chooseFile(e) {
        e.preventDefault();
        ref.current.click();
    }

    function downloadFile(e, blob, filename){
        e.preventDefault();
        FileUtils.downloadFileFromBlob(blob,filename)
    }

    return (
        <div className={"fileUploadForm"}>
            <div className={"fileUploadForm-text"}>
                Файл: {fileName}
            </div>
            <form className={"fileUploadForm-form"}>
                {!props.blob
                    ? <div className={"fileUploadForm-form-wrap"}>
                        <button className={"fileUploadForm-form_button-file"} id={"fileUploadFormInput"} onClick={chooseFile}>Выбрать файл</button>
                        <input className={"fileUploadForm-form_input-file"} type="file" multiple={false} ref={ref} onChange={fileUploadHandler}/>
                        {
                            isFile ? <button onClick={props.sendClick} className={"fileUploadForm-form_button-download"}>Загрузить</button> : ''
                        }
                </div>
                    : <div className={"fileUploadForm-form-wrap"}><button onClick={event => downloadFile(event,props.blob,fileName)}>Cкачать</button></div>
                }
                <div className={"fileUploadForm-form_feedback-wrap"}><a className={"fileUploadForm-form_feedback"} href={"https://t.me/+fsdwBE3o6_o0YmJi"}>Give feedback in Telegram</a></div>
            </form>
        </div>
    );
});

export default FileUploadForm;