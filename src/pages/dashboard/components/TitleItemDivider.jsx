import '../styles/title-divider.css';

const TitleItemDivider = ({title}) =>{
    return(
        <div className="title-item-divider">
            <h3 className="title-divider">
                { title }
            </h3>
        </div>
    )
}

export default TitleItemDivider;