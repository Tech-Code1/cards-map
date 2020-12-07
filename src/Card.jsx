import React from 'react'
/* import DataCard from './DataCard' */


function Card(props) {

  return (
<div className="card my-4 mx-4" 
style={{width: "18rem"}}>
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">{props.btn}</a>
  </div>
</div>
  );
}
export default Card;
