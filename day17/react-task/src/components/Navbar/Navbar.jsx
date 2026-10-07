import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={`navbar navbar-expand ${styles.nav}`}>
      <div className="container">
        <span className={styles.brand}>
          <i className="fa-brands fa-react me-2"></i>
          React Task
        </span>
        <div className="d-flex gap-3">
          <a className={styles.link} href="#counter">Counter</a>
          <a className={styles.link} href="#team">Team</a>
          <a className={styles.link} href="#info">Info</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
