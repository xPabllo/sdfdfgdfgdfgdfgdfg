import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>FitZone</h1>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="programs" smooth={true} duration={500}>Programs</Link>
          </li>
          <li>
            <Link to="trainers" smooth={true} duration={500}>Trainers</Link>
          </li>
          <li>
            <Link to="membership" smooth={true} duration={500}>Membership</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
