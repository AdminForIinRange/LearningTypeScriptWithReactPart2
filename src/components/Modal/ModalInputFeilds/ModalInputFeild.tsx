import {
    HStack,
    VStack,
    Text,
 
    Input,
    ModalHeader,
   
    ModalBody,
    Button,
    
  } from "@chakra-ui/react";
interface InputFeildProps {
    value : string 
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void// ReactNode allows any valid JSX to be passed as children
  }
  

  interface ModalTitleProps {
    title: string
      

  }
const ModalInputFeild : React.FC<InputFeildProps>= ({value, onChange}) => {
  return (
    <>
    
    <Input
                value={value}
                onChange={onChange}
                 _focus={{ border: "2px solid #B7EB8F" }}
                 
                  w={"100%"}
                  
                  fontSize={"16px"}
                  mb={"25px"}
                  borderRadius={"10px"}
                  borderColor={"black"}
       
                  border="2px solid #EBEBEB" // Adjust the width and color as needed
                  type="text"
                  placeholder="I want to learn front end development"
                /></>
  )
}




const ModalTitle : React.FC<ModalTitleProps>= ({title}) => {
    return (
      <>
      
      <HStack w={"100%"} h={"100%"} justify={"center"} mt={"10px"}>
          {" "}
          <Text fontSize={"35px"} fontWeight={"100"}>
            {" "}
           {title}
          </Text>
        </HStack></>
    )
  }
  
  export default ModalTitle, ModalInputFeild