import {Link} from 'react-router-dom'
import s from './Navigation.module.css'
const Navigation = () => {
 return (
     <nav className={s.container}>
        <Link to='/generate'>Generate QR code</Link>
        <Link to='/login'>Login</Link>
        <Link to='/registration'>Registration</Link>
        <Link to='/scan'>Scan QR code</Link>
        <Link to='/generateHistory'>History generate QR code</Link>
        <Link to='/scanHistory'>History scan QR code</Link>
     </nav>
 )
}
export {Navigation}