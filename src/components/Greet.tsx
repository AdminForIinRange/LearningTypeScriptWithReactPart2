import React from 'react'

type Greet = {
    name: string
}
 
const Greet = ({name} : Greet) => {
  return (
    <div>{name}</div>
  )
}

export default Greet