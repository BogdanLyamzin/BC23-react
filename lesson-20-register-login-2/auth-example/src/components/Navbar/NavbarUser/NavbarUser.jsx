import { useSelector, useDispatch } from "react-redux"

import { logout } from "../../../redux/auth/auth-operations";

import { getUser } from "../../../redux/auth/auth-selectors"

const NavbarUser = () => {
    const {name} = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = () => dispatch(logout());

    return (
        <p>{name} <button onClick={onLogout} type="button">Logout</button></p>
    )
}

export default NavbarUser;