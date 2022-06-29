import { useToggle } from '../hooks/useToggle';
import '../styles/togle-styles.css';
import { toggleStyles } from '../styles-components/toggle';

const Toggle = () =>{
    const [ isUser, onClickToggle ] = useToggle();
    return(
        <div className="toggle-container">
            <button onClick={()=>onClickToggle(true)} style={ isUser ? toggleStyles.active : toggleStyles.inactive }>
                User
            </button>
            <button onClick={()=>onClickToggle(false)} style={ !isUser ? toggleStyles.active : toggleStyles.inactive }>
                Creator
            </button>
        </div>
    )
}

export default Toggle;