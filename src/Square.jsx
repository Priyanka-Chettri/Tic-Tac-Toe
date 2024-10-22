import React, { useState } from 'react'
import './App.css'



function Square({value, handleCount}) {



  return (
    <button className='square' onClick={handleCount}>{value}</button>
  )
}

export default Square