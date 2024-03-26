import {
    HStack,

    Text,
    Spacer,

    Button,
  } from "@chakra-ui/react";

  import { FaCheck } from "react-icons/fa";

  interface CompletedBarProps {
    title: string;
    index: number;
  }
const CompletedBar : React.FC<CompletedBarProps> = ({index, title}) => {
  return (

    <>
   
    <Button
    key={index}
    variant={"none"}
    w={"100%"}
   
    h={"65px"}
  >
    
    <HStack bgColor={"lightgreen"}
    
    transition="transform, 0.3s ease-in-out"
    _hover={{
      transform: "scale(1.03)",
      boxShadow: "0 5px 20px green",
    }}
    rounded={"xl"}
    boxShadow={"0 1px 8px green"}
    w={"100%"}
    h={"100%"}
    justify={"left"}
    align={"center"}
    px={5}
  >
    <Text fontSize={"20px"} textAlign={"left"} textDecorationLine={"line-through"}>
      {title}
    </Text>
    <Spacer />
    <Text fontSize={"20px"} textAlign={"left"}>
      <FaCheck />
    </Text>
  </HStack>

  
    
  </Button>
  </>
     
  )
}

export default CompletedBar