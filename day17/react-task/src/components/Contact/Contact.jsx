import styles from './Contact.module.css'

function Contact() {
  return (
    <div className={styles.box}>
      <h3 className={styles.title}>
        <i className="fa-solid fa-envelope me-2"></i>
        Contact
      </h3>
      <p>Feel free to reach out any time.</p>
      <p className={styles.item}>
        <i className="fa-solid fa-envelope me-2"></i>
        hello@example.com
      </p>
      <p className={styles.item}>
        <i className="fa-solid fa-phone me-2"></i>
        +20 100 000 0000
      </p>
      <p className={styles.item}>
        <i className="fa-brands fa-github me-2"></i>
        github.com/username
      </p>
    </div>
  )
}

export default Contact
