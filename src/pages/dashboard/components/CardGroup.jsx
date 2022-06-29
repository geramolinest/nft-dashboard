import Card from './Card';
import '../styles/card-container.css';

const CardGroup = () =>{
    return(
        <div className="card-group">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default CardGroup;