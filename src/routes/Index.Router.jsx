import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "../pages/dashboard/Dashboard";

const IndexRouter = () =>{
    return(
        <div className="index-router" style={{minHeight: '100vh'}}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<DashBoard/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default IndexRouter;