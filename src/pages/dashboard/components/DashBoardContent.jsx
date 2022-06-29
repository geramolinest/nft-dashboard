import HeaderContent from './HeaderContent';
import Body from './Body';
import '../styles/dashboard-content.css';

const DashBoardContent = () =>{
    return(
        <div className="dashboard-container-content">
            <HeaderContent/>
            <Body/>
        </div>
    )
}

export default DashBoardContent;