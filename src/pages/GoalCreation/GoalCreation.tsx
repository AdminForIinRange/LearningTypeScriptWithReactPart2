import {
  HStack,
  VStack,
  Text,

  Spacer,
  useDisclosure,

  Button,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import GoalModalHandler from "../../components/Modal/GoalModalHandler.tsx";

import ModalData from "../../components/Modal/ModalData.json";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store.ts";

import {add, take, amount} from "../../features/counter/counterSlice.tsx"


const GoalCreation: React.FC = () => {

  const value = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalValue, setModalValue]: [string, Dispatch<SetStateAction<string>>] = useState<string>("");
  const { Navbox } = ModalData[0];

  return (
    <>
      <VStack p={2} px={3}>
        <Text fontFamily={"Raleway"} fontSize={"65px"} fontWeight={"700"}>
          Lets Get Started
        </Text>

        <VStack
        
          justify={"center"}
          w={["90%", "90%", "60%", "50%"]}
          align={"start"}
          gap={"40px"}
          mt={"45px"}
        >
          {Navbox.map(({ value, title }, index) => (
            <Button
              key={index}
              variant={"none"}
              w={"100%"}
              onClick={() => {
                setModalValue(value);
                onOpen();
              }}
              h={"65px"}

   
  
            >
              <HStack
                  transition="transform, 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0 5px 20px gray",
                }}
              rounded={"xl"}
                 boxShadow={"0 1px 8px gray"}
                w={"100%"}
                h={"100%"}
                justify={"left"}
                align={"center"}
                px={5}
              >
                <Text fontSize={"20px"} textAlign={"left"}>
                  {title}
                </Text>
                <Spacer />
                <Text fontSize={"20px"} textAlign={"left"}>
                  <FaArrowRightLong />
                </Text>
              </HStack>
            </Button>
          ))}
        </VStack>
        
        
        <Button >
          {value}
        </Button>
        <Button onClick={() => dispatch(add())}>
          Add
        </Button>
        <Button  onClick={() => dispatch(take())}>
          Take
        </Button>
        <Button  onClick={() => dispatch(amount(4))}>
          4
        </Button>
      </VStack>

      <GoalModalHandler
     
        modalValue={modalValue}
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default GoalCreation;
