import '../styles/item-layout.css';

const ItemAside = ({id,icon, title}) =>{
    return(
        <div className="item-layout" onClick={()=>console.log('Hello from ', id)}>
            
            <div className='icon-item'>
                {icon}
            </div>

            <div className='title-item'>
                {title}
            </div>
        </div>
    )
}

export default ItemAside;