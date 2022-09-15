import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import LoginForm from "../../components/LoginForm/LoginForm";

import { login } from '../../redux/auth/auth-operations';

import { isLogin } from '../../redux/auth/auth-selectors';

const LoginPage = () => {
    const dispatch = useDispatch();
    const isUserLogin = useSelector(isLogin);

    const onLogin = (data) => {
        dispatch(login(data));
    }

    if(isUserLogin) {
        return <Navigate to="/my-books" />
    }

    return (
        <div className="container">
            <h1 className="page-title">Login page</h1>
           <LoginForm onSubmit={onLogin} />
        </div>
    )
}

export default LoginPage;