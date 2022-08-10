import { nanoid } from "nanoid";

import HeaderMenuItem from "./HeaderMenuItem";

import "./header-menu.css";

const HeaderMenu = ({items}) => {
    const elements = items.map(({id, ...props}) => <HeaderMenuItem key={id} {...props} />);
    // const elements = items.map(({id, ...props}) => <HeaderMenuItem key={nanoid()} {...props} />);

    return (
        <ul className="header-menu">
            {elements}
        </ul>
    )
}

export default HeaderMenu;