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
const Auth = () => {
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
          <form onSubmit={(e) => e.preventDefault()}>
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
            />
            <FormLabel mt={"20px"} htmlFor="password">
              password
            </FormLabel>
            <Input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              w={"100%"}
            />

            <HStack mt={"15px"} justify="space-between">
              <Checkbox>Remember me</Checkbox>
              <Button variant="link" size="sm">
                Forgot password?
              </Button>
            </HStack>

            <Button mt={"20px"} w={"100%"} type="submit">
              Sign in
            </Button>

            <HStack mt={"20px"}>
              <Divider />
              <Text whiteSpace="nowrap" color="fg.muted">
                Continue With
              </Text>
              <Divider />
            </HStack>

            <HStack mt={"15px"} justify={"center"} align={"center"} mb={"20px"}>
              <Button colorScheme="gray" w={"20%"}>
                <GoogleIcon fontSize={"xl"} />
              </Button>
            </HStack>
          </form>
        </VStack>
      </VStack>
    </> // dont forget to see firebase
    // read write rules
  );
};

export default Auth;
