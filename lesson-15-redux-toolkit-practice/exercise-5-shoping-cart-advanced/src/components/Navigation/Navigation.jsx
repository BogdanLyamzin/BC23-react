import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { StrictMode } from "react";

export default function Navigation() {
  const cart = useSelector((store) => {
    return store.cart;
  });

  const getClassName = ({ isActive }) => {
    return isActive ? styles.activeLink : styles.link;
  };

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={getClassName}>
        Logo
      </NavLink>
      <NavLink to="/menu" className={getClassName}>
        Menu
      </NavLink>
      <NavLink to="/bucket" className={getClassName}>
        Bucket
        <span>({cart.length})</span>
      </NavLink>
    </nav>
  );
}
