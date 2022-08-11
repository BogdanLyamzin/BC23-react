import PropTypes from "prop-types";

import HeaderMenu from "./HeaderMenu/HeaderMenu";

import "./header.css";

const Header = ({title, menuItems}) => {
    return (
      <header className="header">
        <HeaderMenu items={menuItems} />
        {/* const props = {
          items: menuItems
        } 
        HeaderMenu(props)
        */}
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