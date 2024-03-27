import {
  FormLabel,
  Input,
  HStack,
  Checkbox,
  Button,
  Divider,
  Text,
  Box,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { GoogleIcon } from "../../assets/iocns/AuthIcons";
import { AppDispatch, RootState } from "../../store.ts";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
const SignUp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, user, error, emailInUse, invalidCredential , hasNotPasswordVerified, forgotPassword, weakPassword} = useSelector((state: RootState) => state.auth);

  const [email, setEmail]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");

  const [password, setPassword]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");

  const [rePassword, setRePassword]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signInWithEmailAndPassword(""))

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormLabel mt={"20px"} htmlFor="email">
          {" "}
          Email
        </FormLabel>
        <Input
          id="email"
          type="email"
          w={"100%"}
          autoComplete="current-email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <Box display={!emailInUse ? "none" : "block"}
                w={"100%"}
                h={"30px"}
                bg={"#FEEBC8"}
                mt={"10px"}
                border={" 2px dotted #F6AD55"}
              >
                <HStack justify={"center"}>
                  <Text fontWeight={450} color={"#DD6B20"}>
                    The Email you have entered is already Signed Up{" "}
                    <Button colorScheme="yellow.100" variant="link">
                      Login
                    </Button>
                  </Text>
                </HStack>
              </Box>
        <FormLabel mt={"20px"} htmlFor="password">
          password
        </FormLabel>
        <Input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          w={"100%"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormLabel mt={"20px"} htmlFor="password">
          Retype password
        </FormLabel>
        <Input
          id="rePassword"
          type="password"
          required
          autoComplete="current-password"
          w={"100%"}
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />

        <HStack mt={"15px"} justify="space-between">
          <Checkbox>Remember me</Checkbox>
        </HStack>

        <Button mt={"20px"} w={"100%"} type="submit">
          Sign Up
        </Button>

        <HStack mt={"20px"}>
          <Divider />
          <Text whiteSpace="nowrap" color="fg.muted">
            Sign Up With
          </Text>
          <Divider />
        </HStack>

        <HStack mt={"15px"} justify={"center"} align={"center"} mb={"20px"}>
          <Button colorScheme="gray" w={"20%"}>
            <GoogleIcon fontSize={"xl"} />
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default SignUp;
