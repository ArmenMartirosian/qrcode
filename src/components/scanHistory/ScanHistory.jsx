import { QRCodeSVG} from "qrcode.react";
import {SCAN_DATA} from "../../constans.js";
import s from "../generate/qrCodeGenerator.module.css";

const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

    return (
        <div>
            {data.map((text) => (
                <p key ={text}>
                    {text}
                    <div className={s.qrWrapper}>
                        <QRCodeSVG
                            value={text}
                            size={50}/>
                    </div>
                </p>
                )
            )}
        </div>
    )
}
export {ScanHistory}