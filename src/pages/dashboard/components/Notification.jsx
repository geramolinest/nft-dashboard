import { Notifications } from "@mui/icons-material"
import '../styles/notification.css';

const Notification = () =>{
    return(
        <div className="button-container">
            <button className="notification-button">
                <Notifications/>
            </button>
        </div>
    )
}

export default Notification;