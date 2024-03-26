import React , {ReactNode} from 'react'

interface childrenProps {
    children: ReactNode; // ReactNode allows any valid JSX to be passed as children
  }
const ModalInputFeild : React.FC<childrenProps>= ({children}) => {
  return (
    <div>ModalInputFeild</div>
  )
}

export default ModalInputFeild