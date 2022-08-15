import { Component } from "react";

import styles from "./menu.module.scss";

class Menu extends Component {

    state = {
        activeIndex: 0,
    }

    handleClick(e, index) {
        e.preventDefault();
        this.setState({
            activeIndex: index,
        })
    }

    render() {
        const {items} = this.props;
        const {activeIndex} = this.state;

        const elements = items.map(({id, link, text}, index) => {
            const className = (activeIndex === index) ? `${styles.link} ${styles.active}` : styles.link;
            return <li key={id}><a onClick={(e)=> this.handleClick(e, index)} href={link} className={className}>{text}</a></li>
        });

        return (
            <ul className={styles.menu}>
                {elements}
            </ul>
        )
    }
}

export default Menu;