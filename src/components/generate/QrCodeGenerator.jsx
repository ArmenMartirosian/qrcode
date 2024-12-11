import { QRCodeSVG} from "qrcode.react";
import {useState} from "react";
import s from './qrCodeGenerator.module.css'
import {GENERATE_DATA} from "../../constans.js";
const QrCodeGenerator = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const onClickHandler = (event)=>{

        const  prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
       
        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value]),
        );

        setResult(value)
        setValue('')
    }
    const onChangeHandler = (event) => {
        setValue(event.target.value)
        setResult('')
    }

    return (
        <div className={s.container}>
            <input
                className={s.input}
                type="text"
                placeholder='Write text ...'
                value={value}
                onChange={onChangeHandler}
            />
            <button className={s.button} type='button' onClick={onClickHandler}>
                Generate QR code
            </button>
            {result !== '' && (
                <div className={s.qrWrapper}>
                    <QRCodeSVG
                        value={result}
                        size={200}/>
                </div>
            )}
        </div>
    )
}
export {QrCodeGenerator}