import React from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

const TinderCards = () => {
  const [people, setPeople] = React.useState([
    {
      name: 'Steve Jobs',
      url: 'https://www.gstatic.com/tv/thumb/persons/476283/476283_v9_ba.jpg'
    },
    {
      name: 'Elon Musk',
      url: 'https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg'
    },
    {
      name: 'Christopher Nolan',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Christopher_Nolan_Cannes_2018.jpg'
    }
  ])
  
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map(person => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div 
              style={{backgroundImage: `url(${person.url})`}}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
        </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
