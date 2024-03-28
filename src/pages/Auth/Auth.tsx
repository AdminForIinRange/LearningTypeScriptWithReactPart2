import { Text, VStack, Button } from "@chakra-ui/react";

import Login from "../../components/AuthComponents/Login";
import SignUp from "../../components/AuthComponents/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store.ts";
import { setLoginForm, setUserData } from "../../features/auth/authSlice.tsx";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { LoginForm, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    } else {
      navigate("/loginsignup");
    }
  }, [user, localStorage.getItem("authToken")]);

  return (
    <>
      <VStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
        <VStack mt={"25px"}>
          <Text fontSize={"60px"} fontWeight={"700"}>
            Login to your account
            <Text fontSize={"25px"} fontWeight={"300"} textAlign={"center"}>
              {LoginForm ? (
                <Text as={"span"}>Dont Have an Account ? </Text>
              ) : (
                <Text as={"span"}> Already have an Account ?</Text>
              )}{" "}
              <Button
                variant={"link"}
                as={"span"}
                fontWeight={"400"}
                fontSize={"25px"}
                color={"green"}
                onClick={() => dispatch(setLoginForm(!LoginForm))}
              >
                {" "}
                {LoginForm ? (
                  <Text as={"span"}>Sign Up </Text>
                ) : (
                  <Text as={"span"}> Login</Text>
                )}
              </Button>
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
          {LoginForm ? <Login /> : <SignUp />}
        </VStack>
      </VStack>
    </> // dont forget to see firebase
    // read write rules
  );
};

export default Auth;
