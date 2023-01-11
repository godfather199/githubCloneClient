
import './card.css'

function Card({item}) {
  
  const handleClick = () => {
    window.open(item.html_url)
  }

  return (
    <div className="cardContainer" onClick = {handleClick}>
      <div className="cardWrapper">
        <div className="cardTop">
          <span className="cardTitle">{item.name}</span>
          <span className="cardLanguage">{item.language}</span>
          <span className="cardDate">{new Date(item.created_at).toString()})</span>
        </div>
      </div>
    </div>
  )
}

export default Card