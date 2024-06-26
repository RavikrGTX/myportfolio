import React from 'react'
import styles from "./Navbar.module.css"
import { useState } from 'react'
// import {getImageUrl} from "../utils";
import imgmen from "../images/menuicon.png";
import imgcls from "../images/closeIcon.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <nav className={styles.navbar}>
      <div className={styles.topBlur}></div>
      <a className={styles.title} href='/'>portfolio</a>
      <div className={styles.menu} >
       <img className={styles.menubtn} src={menuOpen?imgcls:imgmen} alt="" onClick={()=>{
         setMenuOpen(!menuOpen);
        }} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>{
          setMenuOpen(false);
        }} >
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
