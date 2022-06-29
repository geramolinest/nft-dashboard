import ButtonGroup from './ButtonGroup';
import '../styles/header-news.css';

const NewsHeader = () =>{
    return(
        <header className='news-header'>
            <p className='news-header-title'>Trending Auctions</p>
            <ButtonGroup/>
        </header>
    )
}

export default NewsHeader;