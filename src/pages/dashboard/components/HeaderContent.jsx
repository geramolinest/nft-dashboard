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
                <div className="right-responsive">
                <Notification/>
                <Avatar/>
                </div>
                
            </div>
        </header>
    )
}

export default HeaderContent;