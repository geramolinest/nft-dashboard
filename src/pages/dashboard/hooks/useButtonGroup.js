import { useState } from "react";

export const useButtonGroup = () =>{

    const [ buttonIndex, setButtonIndex ] = useState(0);

    const onClickButton = (index) =>{
        
        if(index === buttonIndex) return;

        setButtonIndex(index);
    }

    return [buttonIndex, onClickButton]
}