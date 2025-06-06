import { useState } from 'react'
import data from '../data.js'

 const App = () => {
  return (
    <>
      {data.map((curData) => {
        return (<h2 key={curData.id}>{curData.titolo}</h2>)
      })}
    </>
  )
}

export default App;
