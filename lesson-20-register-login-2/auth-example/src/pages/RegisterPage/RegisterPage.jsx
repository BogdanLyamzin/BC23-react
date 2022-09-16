import { useDispatch } from 'react-redux';

import RegisterForm from './../../components/RegisterForm/RegisterForm';

import { signup } from '../../redux/auth/auth-operations';


const RegisterPage = () => {
    const dispatch = useDispatch();

    const onRegister = (data) => {
        dispatch(signup(data));
    }

    return (
        <div className="container">
            <h1 className="page-title">Register page</h1>
            <RegisterForm onSubmit={onRegister} />
        </div>
    )
}

export default RegisterPage;