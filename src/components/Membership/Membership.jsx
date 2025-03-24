import React from 'react'
import styles from './Membership.module.css'

const Membership = () => {
  const plans = [
    {
      name: 'Basic',
      price: '29',
      features: ['Access to gym equipment', 'Locker room access', 'Basic fitness assessment']
    },
    {
      name: 'Premium',
      price: '59',
      features: ['All Basic features', 'Group classes', 'Personal trainer (2x/month)']
    },
    {
      name: 'Elite',
      price: '99',
      features: ['All Premium features', 'Unlimited personal training', 'Nutrition consultation']
    }
  ]

  return (
    <section id="membership" className={`section ${styles.membership}`}>
      <div className="container">
        <h2>Membership Plans</h2>
        <div className={styles.plansGrid}>
          {plans.map((plan, index) => (
            <div key={index} className={styles.planCard}>
              <h3>{plan.name}</h3>
              <div className={styles.price}>
                <span>$</span>{plan.price}
                <span>/mo</span>
              </div>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-primary">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Membership
