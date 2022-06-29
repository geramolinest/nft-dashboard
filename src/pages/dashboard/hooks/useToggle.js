import { useState } from "react"

export const useToggle = () =>{
    const [ user, setUser ] = useState(true);

    const onClick = (isUser) =>{
        if(isUser == user) return;
        setUser(isUser);
    }

    return [user, onClick];
}