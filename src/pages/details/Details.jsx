import React from 'react'
import { useLocation } from 'react-router-dom';
import './Details.scss'


const Details = (props) => {
  const {state} = useLocation()
  
  return (
    <div className='details'>
       
       <h4>{state.headline}</h4>
       <h5>{state.subheadline}</h5>
       <img src={state.thumb} alt="" />
        <p>{state.descriptions}</p>
       
    </div>
  )
}

export default Details