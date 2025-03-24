import React from 'react'
import styles from './Programs.module.css'
import { FaDumbbell, FaRunning, FaHeart } from 'react-icons/fa'

const Programs = () => {
  const programs = [
    {
      icon: <FaDumbbell />,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our expert trainers.'
    },
    {
      icon: <FaRunning />,
      title: 'Cardio Classes',
      description: 'Improve your endurance and burn calories effectively.'
    },
    {
      icon: <FaHeart />,
      title: 'Yoga Sessions',
      description: 'Find balance and flexibility through guided yoga practice.'
    }
  ]

  return (
    <section id="programs" className={`section ${styles.programs}`}>
      <div className="container">
        <h2>Our Programs</h2>
        <div className={styles.programsGrid}>
          {programs.map((program, index) => (
            <div key={index} className={styles.programCard}>
              <div className={styles.icon}>{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
