import PropTypes from "prop-types";

import HeaderMenu from "./HeaderMenu/HeaderMenu";

import { btnStyles, headerStyles, headerRowStyles } from "./styles";

const Header = ({title, menuItems}) => {
    return (
      <header style={headerStyles}>
        <div style={headerRowStyles}>
          <a href="#">Logo</a>
          <HeaderMenu items={menuItems} />
          <button style={btnStyles}>Purchase</button>
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