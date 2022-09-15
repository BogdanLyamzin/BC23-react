import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import RegisterForm from './../../components/RegisterForm/RegisterForm';

import { signup } from '../../redux/auth/auth-operations';

import { isLogin } from '../../redux/auth/auth-selectors';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const isUserLogin = useSelector(isLogin);

    const onRegister = (data) => {
        dispatch(signup(data));
    }

    if(isUserLogin) {
        return <Navigate to="/my-books" />
    }

    return (
        <div className="container">
            <h1 className="page-title">Register page</h1>
            <RegisterForm onSubmit={onRegister} />
        </div>
    )
}

export default RegisterPage;