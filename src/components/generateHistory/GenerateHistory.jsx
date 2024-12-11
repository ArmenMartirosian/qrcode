import {GENERATE_DATA} from "../../constans.js";
import s from "../generate/qrCodeGenerator.module.css";
import {QRCodeSVG} from "qrcode.react";

const GenerateHistory = () => {
   const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

   return (
       <div>
          {data.map((text) => (
              <p key={text}>
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
export {GenerateHistory}