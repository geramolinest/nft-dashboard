import NavBar from "../../navbar-responsive/NavBar";
import Aside from "./Aside";
import DashBoardContent from "./DashBoardContent";
const Content = () =>{
    return(
        <div className="content-dashboard">
            <NavBar/>
            <Aside/>
            <DashBoardContent/>
        </div>
    )
}

export default Content;