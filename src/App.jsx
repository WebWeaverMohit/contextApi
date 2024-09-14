import React, { useState } from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'


const App = () => {
  return (
    <div>
      <h1>app component</h1>
      <Comp1 />
      <Comp2 />
    </div>
  )
}

export default App