import PropTypes from "prop-types";

import styles from "./header-menu.module.scss";

const HeaderMenuItem = ({link, text}) => {

    return (<li>
                <a className={styles.menuLink} href={link}>{text}</a>
            </li>);
}

export default HeaderMenuItem;

HeaderMenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}