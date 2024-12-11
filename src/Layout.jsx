import {Routes, Route} from "react-router-dom";
import {Navigation} from "./components/navigation/Navigation.jsx";
import {QrCodeGenerator} from "./components/generate/QrCodeGenerator.jsx";
import {QrCodeScanner} from "./components/scan/QrCodeScanner.jsx";
import {GenerateHistory} from "./components/generateHistory/GenerateHistory.jsx"
import {ScanHistory} from "./components/scanHistory/ScanHistory.jsx"

const Layout = () => {
    return(
        <div>
            <Navigation/>
            <Routes>
                <Route path='/generate' element={<QrCodeGenerator/>} />
                <Route path='/scan' element={<QrCodeScanner/>} />
                <Route path='/generateHistory' element={<GenerateHistory/>} />
                <Route path='/scanHistory' element={<ScanHistory/>} />

            </Routes>
        </div>
    )
}
export {Layout}