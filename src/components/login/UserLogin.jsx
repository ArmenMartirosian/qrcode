import {useState} from "react";
import s from './userLogin.module.css'
import {Link} from "react-router-dom";
const UserLogin = () => {
    const [userLogin, setUserLogin] =useState()
    const [userPassword, setUserPassword] = useState()
    const [result, setResult] = useState('')

    const onChangeHandler = (event) => {
        setUserLogin(event.target.value)
        setResult('')
        console.log()
    }
    const onChangePassword = (event) => {
        setUserPassword(event.target.value)
        setResult('')
        console.log()
    }

    const onClickLoginButton = async () => {
        //console.log('userLogin   '+ userLogin +  '   userPassword ' +userPassword )
        if (!userLogin || !userPassword) {
            setResult('Please enter both login and password.');
            return;
        }

        // try {
        //     // Отправляем POST-запрос на сервер
        //     const response = await axios.post('https://your-server.com/api/login', {
        //         login: userLogin,
        //         password: userPassword
        //     });
        //
        //     // Проверяем результат
        //     if (response.data.success) {
        //         setResult('Login successful!');
        //         // Дальше можно перенаправить пользователя или сохранить токен
        //         console.log('User logged in:', response.data.user);
        //     } else {
        //         setResult('Invalid login or password.');
        //     }
        // } catch (error) {
        //     console.error('Login error:', error);
        //     setResult('An error occurred. Please try again.');
        // }
    };

 return(
     <div className={s.container}>
         <input className={s.input}
                type="text"
                placeholder='Login ...'
                onChange={onChangeHandler}
         />
         <input className={s.input}
                type="password"
                placeholder='Password ...'
                onChange={onChangePassword}
         />
         <button className={s.button}
                 type='button'
                 onClick={onClickLoginButton}
         > Login
         </button>
         <Link to='/registration'>
             <button className={s.button}
                     type='button'
             > Register
             </button>
         </Link>

     </div>
 )
}
export {UserLogin}