import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./toggle-button.module.scss";

class ToogleButton extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    }

    state = {
        isActive: false,
    }

    handleClick = () => {    
        this.setState(prevState => {
            return {
                isActive: !prevState.isActive,
            }
        })
    }

    render(){
        const {text} = this.props;
        const {isActive} = this.state;
        const {handleClick} = this;

        const className = isActive ? `${styles.btn} ${styles.active}` : styles.btn;

        return <button onClick={handleClick} className={className} type="button">{text}</button>
    }
}

export default ToogleButton;

// ToogleButton.propTypes = {
//     text: PropTypes.string.isRequired,
// }