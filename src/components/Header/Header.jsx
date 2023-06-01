import  'react';
import logo from '../../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo}></img>
            <div>
                <a href="/order">Order</a>
                <a href="/order review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;