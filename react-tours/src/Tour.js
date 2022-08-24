import React, { useState }from 'react'

const Tour = ({ id, image, info, price, name }) => {

  // create state for readMore
  const[readMore, setReadMore] = useState(false)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        {/*set conditional to display full text or partial text*/}
        <p>{ readMore ? info : `${info.substring(0, 200)}...
        `}
        <button onClick={()=>setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
        </p>
        <button className='delete-btn'>Not Intertested</button>
      </footer>
    </article>
  )
}

export default Tour