import Banner from './Banner';
import NewsHeader from './NewsHeader';
import CardGroup from './CardGroup';
import RevenueGroup from './RevenueGroup';

import '../styles/body.css';

const Body = () =>{
    return(
        <div className="publications-container">
            <div className="cards-container">
                <Banner/>
                <NewsHeader/>
                <CardGroup/>
            </div>

            <div className="news-container">
               <RevenueGroup/>
            </div>
        </div>
    )
}

export default Body;