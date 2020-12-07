import React from 'react'
import Card from './Card'
import DataCard from './DataCard'

function MapCards() {
return (
<section 
className= "container flex-wrap d-flex justify-content-center align-items-center h-auto" 
style={{width: '800px'}}>
  { DataCard.map((props, index) => {
    return (
      <div className="" >
         <div className="">
           <Card {...DataCard[index]}/>
         </div>
       </div>
        )})};
</section>
    )
}

export default MapCards
