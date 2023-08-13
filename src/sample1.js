import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const gadgets = [
  {
    id: 1,
    title: 'Apple iPad (9th Generation)',
    seller: 'Computer Tablets by Apple',
    img: './images/gadget-1.jpg',
  },
  {
    id: 2,
    title: 'Apple 2020 MacBook Air Laptop M1 Chip',
    seller: 'Traditional Laptop Computers by Apple',
    img: './images/gadget-2.jpg',
  },
]

// this is where your REITERATION comes in
const GadgetList = () => {
  const getGadget = (id) => {
    const gadget = gadgets.find((gadget) => gadget.id === id)
    console.log(gadget)
  }
  console.log(getGadget)
  return (
    <div>
      <header>
        <h2>
          Tech &times; World<span>&#124;</span>
        </h2>
      </header>

      <section className="gadgetlist">
        {gadgets.map((gadget) => {
          return <Gadget {...gadget} getGadget={getGadget} key={gadget.id} /> //Use spread operator for multiple props for best approach
        })}
      </section>
    </div>
  )
}

//Element, Event, Reference to a function or callback function

//This is where your LOGIC comes in
const Gadget = ({ title, seller, img, getGadget, id }) => {
  // const { title, seller, img } = props
  // console.log(props)
  // console.log(getGadget)
  const getSingleGadget = () => {
    getGadget(id)
  }

  return (
    <article className="gadget">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{seller}</h4>
      <button onClick={getSingleGadget}>See More &gt; &gt;</button>
      {/* or onClick={()=> getGadget(id)} */}
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<GadgetList />)
