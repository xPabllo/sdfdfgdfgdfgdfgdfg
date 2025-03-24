import React from 'react'
import styles from './Trainers.module.css'

const Trainers = () => {
  const trainers = [
    {
      name: 'John Smith',
      specialty: 'Strength Training',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc'
    },
    {
      name: 'Sarah Johnson',
      specialty: 'Yoga & Pilates',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2'
    },
    {
      name: 'Mike Wilson',
      specialty: 'CrossFit Expert',
      image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba'
    }
  ]

  return (
    <section id="trainers" className={`section ${styles.trainers}`}>
      <div className="container">
        <h2>Our Trainers</h2>
        <div className={styles.trainersGrid}>
          {trainers.map((trainer, index) => (
            <div key={index} className={styles.trainerCard}>
              <div className={styles.imageContainer}>
                <img src={trainer.image} alt={trainer.name} />
              </div>
              <h3>{trainer.name}</h3>
              <p>{trainer.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
