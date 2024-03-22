import React from 'react'
import Greet from './components/Greet'

export default function App() {
  
  return (
    <div>
      
      <Greet name={"hi"} messageCount={10} isLoggedin={false} />
    </div>
  )
}
