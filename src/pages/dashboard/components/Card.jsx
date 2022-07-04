import { AccessTime } from '@mui/icons-material';
import nft from '../../../assets/nft.svg';

import '../styles/card-container.css';

const Card = () =>{
    return(
        <div className="card-container">
            <header className='card-header'>
                <div className='img-content'>
                    <img src={nft}/>
                    <div className='banner-image'><AccessTime/> <p>12 : 03 : 45</p></div>
                </div>
            </header>
            <div className='card-body'>
                <div className='card-title'>
                    <p className='card-title-info'>Appe in love</p>
                    <div className='avatar-card'>
                        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="avatar" />
                        <p>@geramolina</p>
                    </div>
                    <p className='title-bottom-card'>Current Bind</p>
                </div>
                <div className='card-likes'>
                    <p className='likes'>21,5K Likes</p>
                    <p> <span>9.10 </span>ETH</p>
                </div>
            </div>
        </div>
    )
}

export default Card;