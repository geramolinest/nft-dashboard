import { SideItemsBottom, SideItemsMiddle, SideItemsTop } from '../data';
import ItemAside from './ItemAside';
import TitleItemDivider from './TitleItemDivider';
import '../styles/aside.css';
import Logo from '../../../assets/Logo.svg';

const Aside = () =>{
    return(
        <aside className='aside-container'>
            <div className='image-container'>
                <img src={Logo}/>
            </div>

            {
                SideItemsTop.map( (it, i) => <ItemAside key={i} id={i} icon={it.icon} title={it.title} />  )
            }

            <TitleItemDivider title={'profile'}/>
            
            {
                SideItemsMiddle.map( (it, i) => <ItemAside key={i} id={i} icon={it.icon} title={it.title}/>)
            }

            <TitleItemDivider title={'Other'}/>

            {
                SideItemsBottom.map( (it, i) => <ItemAside key={i} id={i} icon={it.icon} title={it.title}/>)
            }


        </aside>
    )
}

export default Aside;