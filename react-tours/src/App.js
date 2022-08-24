import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

const App = () => {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter( (tour) => tour.id !== id);
    setTours(newTours)
  }

  // get the data
  const fetchTours = async () => {
    setLoading(true)

    // catch network errors
    try{
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false);
      setTours(tours)
    } catch(error){
      setLoading(false)
      console.log(error);      
    }
    
  }

  // run fetchTours one time
  useEffect(()=>{
    fetchTours();
  }, [])

  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }

  // check if there are any tours being displayed
  if(tours.length === 0 ){
    return(
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className='btn' onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )
  }

  return <main><Tours tours={tours} removeTour={removeTour} /></main>
}

export default App