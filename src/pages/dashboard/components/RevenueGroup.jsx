import RevenueCard from './Revenue';
import '../styles/revenue.css';

const RevenueGroup = () =>{
    return(
        <div className="revenue-group">
            <RevenueCard/>
            <RevenueCard/>
            <RevenueCard/>
            <RevenueCard/>
        </div>
    )
}

export default RevenueGroup;