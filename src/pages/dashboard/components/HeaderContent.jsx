import SearchInput from "./SearchInput"
import '../styles/header-content.css';
import Toggle from "./Toggle";
import Notification from "./Notification";
import Avatar from "./Avatar";

const HeaderContent = () =>{
    return(
        <header className="header-container">
            <SearchInput/>
            <div className="items-right-header">
                <Toggle/>
                <Notification/>
                <Avatar/>
            </div>
        </header>
    )
}

export default HeaderContent;