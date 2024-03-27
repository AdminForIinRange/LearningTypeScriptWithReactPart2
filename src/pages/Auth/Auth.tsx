import { HStack, Text, VStack, Input, FormLabel, Button, Checkbox, Divider } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const Auth = () => {
  return (
    <>
      <VStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
        <VStack mt={"25px"}>
          <Text fontSize={"60px"} fontWeight={"700"}>
            Login to your account
            <Text fontSize={"30px"} fontWeight={"300"} textAlign={"center"}>
            Dont have an Account Sign Up
            </Text>
          </Text>
        </VStack>

        <VStack
          p={5}
          mt={"25px"}
          w={"500px"}
          h={"500px"}
          rounded={"xl"}
          boxShadow={"0 1px 8px gray"}
          align={"left"}
        >
          <form >
            <FormLabel htmlFor="email"> Email</FormLabel>
            <Input id="email" type="email" w={"100%"} required />
            <FormLabel mt={"20px"} htmlFor="password">password</FormLabel>
    <Input
      id="password"
      type="password"
      required
      autoComplete="current-password"
      w={"100%"}
     
    />

    
  <HStack mt={"10px"} justify="space-between">
    <Checkbox
    
    >
      Remember me
    </Checkbox>
    <Button
      colorScheme="whatsapp"
      variant="link"
      size="sm"
   
    >
      Forgot password?
    </Button>

    
  </HStack>
 
  <Button  mt={"20px"} w={"100%"} type="submit">Sign in</Button>
  
  <HStack  mt={"20px"} >
      <Divider />
      <Text whiteSpace="nowrap" color="fg.muted">
      Continue With
      </Text>
      <Divider />
  
    </HStack>

    <HStack  mt={"20px"} justify={"center"} align={"center"} >

      <Button colorScheme="gray"  w={"20%"} >


        <FaGoogle color="lightgreen" />
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
