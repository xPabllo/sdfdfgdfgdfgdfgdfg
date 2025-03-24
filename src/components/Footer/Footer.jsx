import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>FitZone</h3>
            <p>Your premium fitness destination</p>
            <div className={styles.social}>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <p>123 Fitness Street</p>
            <p>New York, NY 10001</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@fitzone.com</p>
          </div>
          <div className={styles.hours}>
            <h4>Hours</h4>
            <p>Monday - Friday: 6am - 10pm</p>
            <p>Saturday: 8am - 8pm</p>
            <p>Sunday: 8am - 6pm</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; 2023 FitZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
