import { useState } from 'react'
import CounterButton from '../CounterButton/CounterButton'
import styles from './Counter.module.css'

function Counter() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <section id="counter" className="mb-5">
      <h2 className="section-title">
        <i className="fa-solid fa-calculator me-2"></i>
        Counter (Parent)
      </h2>
      <div className={styles.card}>
        <p className={styles.label}>Current value</p>
        <h1 className={styles.value}>{count}</h1>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <CounterButton text="Decrease" icon="fa-minus" onClick={decrease} />
          <CounterButton text="Reset" icon="fa-rotate-left" onClick={reset} />
          <CounterButton text="Increase" icon="fa-plus" onClick={increase} />
        </div>
      </div>
    </section>
  )
}

export default Counter
