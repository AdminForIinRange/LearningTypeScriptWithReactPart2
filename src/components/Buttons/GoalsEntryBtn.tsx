import { HStack, Button } from '@chakra-ui/react';
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';


interface GoalsEntryBtnProps {
    onClick: () => void
}
const GoalsEntryBtn : React.FC<GoalsEntryBtnProps> = ({onClick}) => {
  return (
    <HStack w={"100%"} justify={"center"}>
    <Button
      w={"125px"}
      colorScheme="whatsapp"
      rightIcon={<FaArrowRightLong />}
      onClick={onClick}
    >
      Next
    </Button>
  </HStack>
  )
}

export default GoalsEntryBtn