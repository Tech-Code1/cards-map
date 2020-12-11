import React from 'react'
import DataCard from './DataCard'


function Card() {

  return (
    <h1>hola mundo</h1>
    <>
    { DataCard.map(cards => (

<div className="card my-4 mx-4"
key={cards.id}
style={{width: "18rem"}}>
  <img src={cards.img} className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title">{cards.title}</h5>
    <p className="card-text">{cards.description}</p>
    <a href="!#" className="btn btn-primary">{cards.btn}</a>
  </div>
</div>
))};
</>
  )
}

export default Card;
