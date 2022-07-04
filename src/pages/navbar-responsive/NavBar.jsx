import logo from '../../assets/Logo.svg';
import SearchInput from '../dashboard/components/SearchInput';
import './styles/navbar.css';

const NavBar = () => {
    return (
        <div className="navbar-responsive">
            <img src={logo}/>
            <SearchInput/>
        </div>
    );
}

export default NavBar;
