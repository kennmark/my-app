import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { gadgets } from './gadgets'
import Gadget from './Gadget'
import reactlogo from './images/react-logo.png'
import kenndevlogo from './images/kenndev-logo.png'
import netlifylogo from './images/netlify-logo.png'

const GadgetList = () => {
  return (
    <>
      <header>
        Tech&times;World<span className="blink">&#124;</span>
      </header>

      <section className="gadgetlist">
        {gadgets.map((gadget, index) => {
          return <Gadget {...gadget} key={gadget.id} number={index} />
        })}
      </section>
      <footer>
        <p>
          Powered: <img src={reactlogo} alt="react-logo" width={'20rem'} />
          &nbsp;ReactJS |&nbsp;
          <img src={netlifylogo} alt="Netlify logo" width={'20rem'} /> Netlify
          &nbsp;Developed:&nbsp;
          <img src={kenndevlogo} alt="kenndev-logo" width={'20rem'} />
          &nbsp;KennDev&nbsp; &copy;2023
        </p>
      </footer>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<GadgetList />)
