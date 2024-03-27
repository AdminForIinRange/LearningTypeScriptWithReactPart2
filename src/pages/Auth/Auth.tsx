import {
  HStack,
  Text,
  VStack,
  Input,
  FormLabel,
  Button,
  Checkbox,
  Divider,
} from "@chakra-ui/react";

import { GoogleIcon } from "../../assets/iocns/AuthIcons";
import Login from "../../components/AuthComponents/Login";
import SignUp from "../../components/AuthComponents/SignUp";
import { useDispatch , useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store.ts";

const Auth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {ViewLogin} =
    useSelector((state: RootState) => state.auth);
  return (
    <>
      <VStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
        <VStack mt={"25px"}>
          <Text fontSize={"60px"} fontWeight={"700"}>
            Login to your account
            <Text fontSize={"25px"} fontWeight={"300"} textAlign={"center"}>
              Don't have an Account <Button variant={"link"} as={"span"}  fontWeight={"400"} fontSize={"25px"} color={"green"}> Sign Up</Button>
            </Text>
          </Text>
        </VStack>

        <VStack
          px={6}
          py={3}
          mt={"25px"}
          w={"600px"}
          h={"100%"}
          rounded={"xl"}
          boxShadow={"0 1px 8px gray"}
          align={"left"}
        >
        { !true ?
          <Login /> : <SignUp />}

        </VStack>
      </VStack>
    </> // dont forget to see firebase
    // read write rules
  );
};

export default Auth;
