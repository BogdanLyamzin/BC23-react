import PropTypes from "prop-types";

import HeaderMenu from "./HeaderMenu/HeaderMenu";

import styles from "./header.module.css";

const Header = ({title, menuItems}) => {
    return (
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <a href="#">Logo</a>
          <HeaderMenu items={menuItems} />
          <button className={styles.btn}>Purchase</button>
        </div>
        {title && <h1>{title}</h1>}
      </header>
    )
  };

export default Header;

Header.defaultProps = {
  menuItems: []
}

Header.propTypes = {
  title: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }))
}