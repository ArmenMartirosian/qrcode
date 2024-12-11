import {Scanner} from "@yudiel/react-qr-scanner";
import {useState} from "react";
import s from './qrCodeScanner.module.css'
import {SCAN_DATA} from '../../constans.js'
const QrCodeScanner = () => {
    const [scanned, setScanned] = useState()
    const scanHandler = (result) => {
        setScanned(result[0].rawValue)

        const  prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData,result[0].rawValue])
        );
    }
    return (
        <div className={s.container}>
            <Scanner
                onScan={scanHandler}
                components={{
                    audio: false,
                    finder: false,
                }}
                styles={{
                    container: {width:200}
                }}
            />
            <p className={s.result}>{scanned}</p>
        </div>
    )
}
export {QrCodeScanner}