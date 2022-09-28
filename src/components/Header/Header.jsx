import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return ( 
        <header className="header">
            <div className='header_title'>Bo <div className='ring'></div> oobs!</div>
            <nav className='header_nav'>
                <ul className='menu'>
                    <li className='menu_item'>
                      <Link className='header_link' to="/">Главная</Link>
                    </li>
                    <li className='menu_item'>
                      <Link className='header_link' to="/About">О себе</Link>
                    </li>
                    <li className='menu_item'>
                      <Link className='header_link' to="/MyProjects">Мои проекты</Link>
                    </li>
                    <li className='menu_item'>
                      <Link className='header_link' to="/">Мой опыт</Link>
                    </li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;