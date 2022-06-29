import { ButtonsHeader } from '../data';
import { useButtonGroup } from '../hooks';
import { buttonGroup } from '../styles-components/button.group';
import '../styles/button-group.css';

const ButtonGroup = () =>{

    const [ buttonIndex, onClickButton ] = useButtonGroup();
    const { active, inactive } = buttonGroup;
    return(
        <div className='button-group'>
            {
                ButtonsHeader.map( (btn, i) => <button style={ i === buttonIndex ? active : inactive} key={i} onClick={()=>onClickButton(i)}>{btn.buttonText}</button>)
            }
        </div>
    )
}

export default ButtonGroup;