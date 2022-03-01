import React,{useState} from "react";
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { FaTimes } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  const [responsive, setResponsive] = useState(false)
  return (
    <header className={styles.header}>
      <h2>Logo</h2>
      <div onClick={() => setResponsive(!responsive)} className={styles.menu}>
         {
           responsive ?<FaTimes /> :<AiOutlineMenu />
         }
      </div>
      <nav className={responsive ? styles.navmobile: styles.nav}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
