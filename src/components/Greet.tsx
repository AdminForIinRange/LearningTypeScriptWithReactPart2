import React from 'react'

type Greet = {
    name: string
    messageCount: number
    isLoggedin: boolean
}
 
const Greet = ({name,messageCount,isLoggedin} : Greet) => {
  return (
    <div>{name}, {messageCount}, {isLoggedin} </div>
  )
}

export default Greet