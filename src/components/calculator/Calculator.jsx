import React,{useState} from 'react'
import './Calculator.css'
function Calculator() {
    const [stoploss,setStoploss]=useState(0)
    const [risk,setRisk]=useState(0)
    const [quantity,setQuant]=useState(0.0)
    const ClaculateAmt=()=>{
        const amt=risk/stoploss
        setQuant(amt)
    }
  return (
    <div className='calculator'>
        <h1 className='Calhead'>Calculator</h1>
        <div className='calc'>
            <label className='risk'>Risk</label>
            <input className='inps' type="number" placeholder="Enter stoploss" onChange={(e)=>setStoploss(e.target.value)}/>
            <label className='stoploss'>Stoploss </label>
            <input className='inps' type="number" placeholder="Enter risk amount" onChange={(e)=>setRisk(e.target.value)}/>
            <button className='button' onClick={ClaculateAmt}>Calculate</button>
            <h3 className='quantity'>Quantity: {quantity}</h3>
        </div>
    </div>
  )
}

export default Calculator