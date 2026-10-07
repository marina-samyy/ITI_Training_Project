import styles from './About.module.css'

function About() {
  return (
    <div className={styles.box}>
      <h3 className={styles.title}>
        <i className="fa-solid fa-circle-info me-2"></i>
        About
      </h3>
      <p>
        This project is built with React and Vite. It shows how components, JSX,
        Fragment, props and state work together.
      </p>
      <ul className={styles.list}>
        <li>Parent and Child components</li>
        <li>State with useState</li>
        <li>Props to pass data and functions</li>
        <li>Bootstrap and FontAwesome</li>
      </ul>
    </div>
  )
}

export default About
