import React from 'react'
import Card from '../card/Card'
import './cards.css'

function Cards({repo}) {
 

  return (
    <div className="cardsContainer">
      <div className="cardsWrapper">
        <div className="cardsList">
          {repo.map((item) => (
            <Card key = {item.id} item = {item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards