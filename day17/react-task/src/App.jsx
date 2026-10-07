import { Fragment } from 'react'
import Navbar from './components/Navbar/Navbar'
import Counter from './components/Counter/Counter'
import Team from './components/Team/Team'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="container py-5">
        <Counter />
        <Team />
        <section id="info" className="row g-4">
          <div className="col-md-6">
            <About />
          </div>
          <div className="col-md-6">
            <Contact />
          </div>
        </section>
      </main>
    </Fragment>
  )
}

export default App
