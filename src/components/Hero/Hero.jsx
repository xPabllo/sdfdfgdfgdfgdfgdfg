import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Transform Your Body</h1>
          <p>Join us and start your fitness journey today</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
