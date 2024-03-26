import {
  HStack,
  VStack,
  Text,
  Spacer,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import GoalModalHandler from "../../components/Modal/GoalModalHandler.tsx";
import { AppDispatch } from "../../store.ts";
import ModalData from "../../components/Modal/ModalData.json";
import { useDispatch } from "react-redux";
import { NavboxCheck } from "../../features/goals/goalsSlice.tsx";
const GoalCreation: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalValue, setModalValue]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState<string>("");
  const { Navbox } = ModalData[0];

  useEffect (() => {
   
    if (!isOpen){
      dispatch(NavboxCheck(false));
    }
   
  }, [modalValue, dispatch, isOpen]);

  return (
    <>
      <VStack p={2} px={3}>
        <Text fontFamily={"Raleway"} fontSize={"95px"} fontWeight={"700"}>
          Lets Get Started
        </Text>

        {isOpen ? (
          <> </>
        ) : (
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
                  dispatch(NavboxCheck(value))
                 
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
        )}
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
