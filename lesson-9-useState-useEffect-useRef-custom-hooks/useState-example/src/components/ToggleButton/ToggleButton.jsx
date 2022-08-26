import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./toggle-button.module.scss";

const ToggleButton = ({text}) => {

    const [state, setState] = useState(false);

    const handleClick = () => {
        setState(prevState => !prevState)
    }

    const className = state ? `${styles.btn} ${styles.active}` : styles.btn;

    return <button onClick={handleClick} className={className} type="button">{text}</button>
}
/*
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
*/

export default ToggleButton;

ToggleButton.propTypes = {
    text: PropTypes.string.isRequired,
}