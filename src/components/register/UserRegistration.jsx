import {useState} from "react";
import s from './userRegistration.module.css'
const UserRegistration = () => {
    const [userName, setUserName] =useState()
    const [userLastName, setUserLastName] =useState()
    const [userEmail, setUserEmail] =useState()
    const [userLogin, setUserLogin] =useState()
    const [userPassword, setUserPassword] =useState()
    const [userPasswordRe, setUserPasswordRe] =useState()
    const [result, setResult] = useState('');

    const onChangeHandler = (setter) => (event) => {
        setter(event.target.value);
        setResult('');
    };

    const onClickRegisterButton = async () => {
        if (!userName || !userLastName || !userEmail || !userLogin || !userPassword || !userPasswordRe) {
            setResult('Please fill in all fields.');
            return;
        }
        if (userPassword !== userPasswordRe) {
            setResult('Passwords do not match.');
            return;
        }

        // try {
        //     const response = await axios.post('https://your-server.com/api/register', {
        //         name: userName,
        //         lastName: userLastName,
        //         email: userEmail,
        //         login: userLogin,
        //         password: userPassword,
        //         passwordRe: userPasswordRe
        //     });
        //
        //     if (response.data.success) {
        //         setResult('Registration successful!');
        //         console.log('User registered:', response.data.user);
        //     } else {
        //         setResult(response.data.message || 'Registration failed.');
        //     }
        // } catch (error) {
        //     console.error('Registration error:', error);
        //     setResult('An error occurred. Please try again.');
        // }
    };

    return(
        <div className={s.container}>
            <input className={s.input}
                   type="text"
                   placeholder='Name'
            onChange={onChangeHandler(setUserName)}
            />
            <input className={s.input}
                   type="text"
                   placeholder='LastName'
                   onChange={onChangeHandler(setUserLastName)}
            />
            <input className={s.input}
                   type="email"
                   placeholder='Email'
                   onChange={onChangeHandler(setUserEmail)}
            />
            <input className={s.input}
                   type="text"
                   placeholder='Login'
                   onChange={onChangeHandler(setUserLogin)}
            />
            <input className={s.input}
                   type="password"
                   placeholder='Password ...'
                   onChange={onChangeHandler(setUserPassword)}
            />
            <input className={s.input}
                   type="password"
                   placeholder='Password ...'
                   onChange={onChangeHandler(setUserPasswordRe)}
            />
            <button className={s.button}
                    type='button'
                    onClick={onClickRegisterButton}
            > Register
            </button>
        </div>
    )
}
export {UserRegistration}