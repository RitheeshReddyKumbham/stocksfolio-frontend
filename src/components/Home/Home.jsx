import React from 'react'
import Calculator from '../calculator/Calculator'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  const addJournel=()=>{
    navigate('/addJournel')
  }

  const watchJournel=()=>{
    navigate('/watchJournel')
  }
  
  return (
    <div>
        <nav>
            <button className='button' onClick={addJournel} >Add Journel</button>
            <button className='button' onClick={watchJournel}>Watch Journel</button>
        </nav>
        <Calculator/>
    </div>
  )
}

export default Home