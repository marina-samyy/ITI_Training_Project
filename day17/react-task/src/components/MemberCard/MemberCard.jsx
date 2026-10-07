import styles from './MemberCard.module.css'

function MemberCard({ name, role, icon, active, onSelect }) {
  return (
    <div className={active ? `${styles.card} ${styles.active}` : styles.card}>
      <div className={styles.icon}>
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <h5 className={styles.name}>{name}</h5>
      <p className={styles.role}>{role}</p>
      <button className="btn btn-outline-purple btn-sm" onClick={onSelect}>
        {active ? 'Selected' : 'Select'}
      </button>
    </div>
  )
}

export default MemberCard
