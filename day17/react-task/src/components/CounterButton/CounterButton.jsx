import styles from './CounterButton.module.css'

function CounterButton(props) {
  return (
    <button className={`btn btn-purple ${styles.button}`} onClick={props.onClick}>
      <i className={`fa-solid ${props.icon} me-2`}></i>
      {props.text}
    </button>
  )
}

export default CounterButton
