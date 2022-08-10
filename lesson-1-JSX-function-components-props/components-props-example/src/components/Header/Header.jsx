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
        <h1>{title}</h1>
      </header>
    )
  };

export default Header;