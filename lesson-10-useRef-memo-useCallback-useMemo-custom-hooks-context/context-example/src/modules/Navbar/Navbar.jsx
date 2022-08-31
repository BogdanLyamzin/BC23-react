import useLang from "../../shared/hooks/useLang";

import LanguageSwitcher from "../LanguageSwitcher"

import styles from "./Navbar.module.css";

import locale from "./local.json";

const {title} = locale;

const Navbar = ()=> {   
    const {lang} = useLang();

    return (
        <nav className={styles.navbar}>
            <a href="#">Logo</a>
            <div>{title[lang]}</div>
            <LanguageSwitcher />
        </nav>
    )
}

export default Navbar;