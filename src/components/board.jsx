import React from 'react'
import tile from './tile'
import strike from './strike'

function board() {
  return (
    <div className='border'>
      <tile className="right-border bottom-borer" /> 
      <tile className="right-border bottom-borer" /> 
      <tile className="right-border bottom-borer" /> 
      <tile className="right-border bottom-borer" /> 
      <tile className="right-border bottom-borer" /> 
      <tile className="right-border bottom-borer" /> 
      <tile className="right-border bottom-borer" /> 
      <tile className="right-border bottom-borer" /> 
      <tile className="right-border bottom-borer" /> 
      <strike />
    </div>
  )
}

export default board
