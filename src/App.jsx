import {Routes, Route} from "react-router-dom";
import {Navigation} from "./components/navigation/Navigation.jsx";
import {QrCodeGenerator} from "./components/generate/QrCodeGenerator.jsx";
import {QrCodeScanner} from "./components/scan/QrCodeScanner.jsx";
import {GenerateHistory} from "./components/generateHistory/GenerateHistory.jsx"
import {ScanHistory} from "./components/scanHistory/ScanHistory.jsx"
import {UserLogin} from "./components/login/UserLogin.jsx";
import {UserRegistration} from "./components/register/UserRegistration.jsx";

const App = () => {
    return(
        <div>
            <Navigation/>
            <Routes>
                <Route path='/login' element={<UserLogin/>} />
                <Route path='/registration' element={<UserRegistration/>} />
                <Route path='/generate' element={<QrCodeGenerator/>} />
                <Route path='/scan' element={<QrCodeScanner/>} />
                <Route path='/generateHistory' element={<GenerateHistory/>} />
                <Route path='/scanHistory' element={<ScanHistory/>} />

            </Routes>
        </div>
    )
}
export {App}